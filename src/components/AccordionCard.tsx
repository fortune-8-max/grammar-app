"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lightbulb,
  CheckCircle2,
  ThumbsUp,
  HelpCircle,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import { checkTranslation, askGrammarQuestion } from "@/lib/gemini";

type QAMessage = {
  role: "user" | "ai";
  text: string;
};

type TranslationResult = {
  type: "perfect" | "good" | "poor" | "error";
  message: string;
};

type Props = {
  english: string;
  japanese: string;
  point: string;
  source?: string;
  type: "example" | "advanced";
  themeId: string;
  index: number;
  onProgress: (themeId: string, type: string, data: Record<string, unknown>) => void;
};

export default function AccordionCard({
  english,
  japanese,
  point,
  source,
  type,
  themeId,
  index,
  onProgress,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [userTranslation, setUserTranslation] = useState("");
  const [result, setResult] = useState<TranslationResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const [questionText, setQuestionText] = useState("");
  const [qaHistory, setQaHistory] = useState<QAMessage[]>([]);
  const [isAsking, setIsAsking] = useState(false);

  const handleCheck = async () => {
    if (!userTranslation.trim()) return;
    setIsChecking(true);
    setResult(null);

    try {
      const response = await checkTranslation(english, japanese, point, userTranslation);
      setResult({ type: response.score, message: response.feedback });
      setIsOpen(true);
      onProgress(themeId, "translated", {
        itemType: type,
        index,
        score: response.score,
        text: userTranslation,
      });
    } catch (error) {
      console.error("Gemini API error:", error);
      setResult({
        type: "error",
        message: "判定中に通信エラーが発生しました。もう一度お試しください。",
      });
    } finally {
      setIsChecking(false);
    }
  };

  const handleAskQuestion = async () => {
    if (!questionText.trim()) return;

    const newUserMsg: QAMessage = { role: "user", text: questionText };
    setQaHistory((prev) => [...prev, newUserMsg]);
    setQuestionText("");
    setIsAsking(true);

    try {
      const answerText = await askGrammarQuestion(english, japanese, point, newUserMsg.text);
      setQaHistory((prev) => [...prev, { role: "ai", text: answerText }]);
    } catch (error) {
      console.error("Gemini API error:", error);
      setQaHistory((prev) => [
        ...prev,
        { role: "ai", text: "通信エラーが発生しました。もう一度試してみてください。" },
      ]);
    } finally {
      setIsAsking(false);
    }
  };

  return (
    <div className="bg-white rounded-[24px] p-6 mb-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] border border-zinc-100 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
            type === "advanced"
              ? "bg-[#007AFF]/10 text-[#007AFF]"
              : "bg-[#34C759]/10 text-[#008A00]"
          }`}
        >
          {type === "advanced" ? "実践問題" : "例題"}
        </span>
        {source && source !== "不明" && (
          <span className="text-[12px] text-[#86868B] font-medium">{source}</span>
        )}
      </div>

      <p className="text-[18px] md:text-[20px] font-semibold text-[#1D1D1F] leading-relaxed mb-6">
        {english}
      </p>

      {/* ユーザー入力エリア */}
      <div className="mb-6">
        <textarea
          value={userTranslation}
          onChange={(e) => {
            setUserTranslation(e.target.value);
            if (result) setResult(null);
          }}
          placeholder="ここに日本語訳を入力して判定してみよう..."
          className="w-full p-4 bg-[#F5F5F7] border-none rounded-[16px] text-[#1D1D1F] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 transition-all resize-none min-h-[80px]"
        />
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <button
            onClick={handleCheck}
            disabled={!userTranslation.trim() || isChecking}
            className="px-6 py-2.5 bg-[#007AFF] text-white text-[14px] font-semibold rounded-full hover:bg-[#007AFF]/90 disabled:bg-zinc-200 disabled:text-zinc-400 transition-all active:scale-[0.98] flex items-center justify-center min-w-[100px]"
          >
            {isChecking ? <Loader2 className="w-5 h-5 animate-spin" /> : "判定する"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2.5 text-[#86868B] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] text-[14px] font-medium rounded-full transition-colors flex items-center gap-1.5 active:scale-[0.98]"
          >
            {isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {isOpen ? "解答を隠す" : "解答だけ見る"}
          </button>
        </div>
      </div>

      {/* 判定結果の表示 */}
      {result && isOpen && (
        <div
          className={`mb-6 p-4 rounded-[16px] flex items-start gap-3 animate-slide-down ${
            result.type === "perfect"
              ? "bg-[#34C759]/10 text-[#008A00]"
              : result.type === "good"
              ? "bg-[#FF9500]/10 text-[#CC7300]"
              : result.type === "error"
              ? "bg-zinc-100 text-[#86868B]"
              : "bg-[#FF3B30]/10 text-[#FF3B30]"
          }`}
        >
          {result.type === "perfect" && (
            <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0 mt-0.5" />
          )}
          {result.type === "good" && (
            <ThumbsUp className="w-5 h-5 text-[#FF9500] shrink-0 mt-0.5" />
          )}
          {result.type === "poor" && (
            <HelpCircle className="w-5 h-5 text-[#FF3B30] shrink-0 mt-0.5" />
          )}
          {result.type === "error" && (
            <HelpCircle className="w-5 h-5 text-[#86868B] shrink-0 mt-0.5" />
          )}
          <div>
            <div className="font-semibold text-[15px] mb-1">
              {result.type === "perfect"
                ? "素晴らしい！完璧に読めています。"
                : result.type === "good"
                ? "惜しい！大まかな意味はとれています。"
                : result.type === "error"
                ? "エラー"
                : "もう一息！模範解答とポイントを確認しましょう。"}
            </div>
            <div className="text-[14px] opacity-90 leading-relaxed font-medium">
              {result.message}
            </div>
          </div>
        </div>
      )}

      {/* Accordion Content (模範解答とポイント) */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 bg-[#F5F5F7] rounded-[16px] space-y-4">
            <div>
              <span className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider block mb-1">
                模範解答
              </span>
              <p className="text-[#1D1D1F] leading-relaxed font-medium text-[15px]">
                {japanese}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/60">
              <span className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider block mb-2">
                ポイント
              </span>
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-[#FF9500] shrink-0 mt-0.5" />
                <p className="text-[14px] text-[#1D1D1F] leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            </div>

            {/* 先生への文法質問チャットエリア (iMessage風) */}
            <div className="pt-6 mt-4 border-t border-zinc-200/60">
              <h4 className="flex items-center gap-2 text-[14px] font-semibold text-[#1D1D1F] mb-4">
                <MessageCircle className="w-5 h-5 text-[#007AFF]" />
                先生に質問する
              </h4>

              {/* QAチャット履歴 */}
              {qaHistory.length > 0 && (
                <div className="space-y-4 mb-4">
                  {qaHistory.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2 ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`p-3.5 max-w-[85%] text-[15px] leading-relaxed font-medium shadow-sm whitespace-pre-wrap ${
                          msg.role === "user"
                            ? "bg-[#007AFF] text-white rounded-[20px] rounded-tr-[4px]"
                            : "bg-white border border-zinc-100 text-[#1D1D1F] rounded-[20px] rounded-tl-[4px]"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isAsking && (
                    <div className="flex justify-start animate-pulse">
                      <div className="px-4 py-3 rounded-[20px] rounded-tl-[4px] bg-white border border-zinc-100 text-[#86868B] text-[14px] flex items-center gap-2 shadow-sm font-medium">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        AIが入力中...
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 質問入力フォーム */}
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                      e.preventDefault();
                      handleAskQuestion();
                    }
                  }}
                  placeholder="メッセージ (例：この what は関係代名詞？)"
                  className="flex-1 px-4 py-3 bg-white border border-zinc-200/80 rounded-full text-[#1D1D1F] text-[15px] focus:outline-none focus:border-[#007AFF] transition-all shadow-sm"
                />
                <button
                  onClick={handleAskQuestion}
                  disabled={!questionText.trim() || isAsking}
                  className="w-10 h-10 bg-[#007AFF] hover:bg-[#007AFF]/90 disabled:bg-[#007AFF]/50 text-white rounded-full flex items-center justify-center transition-all active:scale-95 shrink-0 shadow-sm"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
