"use client";

const GEMINI_MODEL = "gemini-1.5-flash";

function getApiKey(): string {
  return process.env.NEXT_PUBLIC_GEMINI_API_KEY ?? "";
}

/**
 * Gemini APIに翻訳チェックを依頼（JSON形式で返却）
 */
export async function checkTranslation(
  english: string,
  japanese: string,
  point: string,
  userTranslation: string
): Promise<{ score: "perfect" | "good" | "poor"; feedback: string }> {
  const apiKey = getApiKey();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const systemPrompt = `あなたは優しくて優秀な英語教師です。生徒の和訳を採点してください。
模範解答と照らし合わせ、英文の構造（SVOCなど）や意味が正確に取れているかを重視して判定します。
「てにおは」の違いや、語尾の違い（例：「である」「だ」「になっている」など）、自然な意訳は減点せず「正解(perfect)」としてください。

評価は以下の3段階で行ってください：
- perfect: 意味が正確に取れており、素晴らしい和訳。
- good: 大まかな意味は合っているが、一部誤訳や単語の抜けがある。
- poor: 意味が大きく異なる、または文法構造を取り違えている。

JSON形式で "score" (perfect/good/poor) と "feedback" (生徒への短くて的確なアドバイスや、なぜその評価になったのかを励ましの言葉と共に一言添える) を返してください。`;

  const promptText = `
【英文】${english}
【模範解答】${japanese}
【文法ポイント】${point}
【生徒の和訳】${userTranslation}
`;

  const payload = {
    contents: [{ parts: [{ text: promptText }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          score: { type: "STRING", description: "perfect, good, or poor" },
          feedback: { type: "STRING", description: "生徒への短いフィードバックメッセージ（日本語）" },
        },
        required: ["score", "feedback"],
      },
    },
  };

  const delays = [1000, 2000, 4000, 8000, 16000];
  for (let i = 0; i <= 5; i++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      return JSON.parse(text);
    } catch (error) {
      if (i === 5) throw error;
      await new Promise((resolve) => setTimeout(resolve, delays[i]));
    }
  }
  throw new Error("Max retries exceeded");
}

/**
 * Gemini APIに文法質問を送信（テキスト形式で返却）
 */
export async function askGrammarQuestion(
  english: string,
  japanese: string,
  point: string,
  question: string
): Promise<string> {
  const apiKey = getApiKey();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const systemPrompt = `あなたは優しくて優秀な英語教師です。以下の英文とその文法ポイントについて、生徒からの質問に答えてください。

【回答のルール】
1. まず結論（答えの要点）を最初の1〜2文でズバリと短く答えること。
2. その後の解説は、ダラダラと長く書かず、必要なら箇条書きを使って中高生がパッと見て理解できるように簡潔にまとめること。
3. 丁寧すぎる前置きや挨拶は省き、テンポよく答えること。
4. 最後に励ましの言葉を1文だけ添えること。

【対象の英文】${english}
【模範解答】${japanese}
【文法ポイント】${point}`;

  const payload = {
    contents: [{ parts: [{ text: question }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "すみません、うまく回答できませんでした。";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "通信エラーが発生しました。もう一度試してみてください。";
  }
}
