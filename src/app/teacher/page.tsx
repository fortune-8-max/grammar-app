"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  User,
  Users,
  BrainCircuit,
  MessageCircle,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { grammarData } from "@/data/grammar-data";
import {
  supabase,
  fetchAllStudentProgress,
  type ProgressRow,
} from "@/lib/supabase";

// ================================================================
// Score Badge
// ================================================================
function ScoreBadge({ score }: { score: string }) {
  if (score === "perfect")
    return <span className="px-2 py-0.5 bg-[#34C759]/10 text-[#008A00] rounded-md text-[11px] font-semibold">Perfect</span>;
  if (score === "good")
    return <span className="px-2 py-0.5 bg-[#FF9500]/10 text-[#CC7300] rounded-md text-[11px] font-semibold">Good</span>;
  if (score === "poor")
    return <span className="px-2 py-0.5 bg-[#FF3B30]/10 text-[#FF3B30] rounded-md text-[11px] font-semibold">Poor</span>;
  return <span className="px-2 py-0.5 bg-zinc-100 text-[#86868B] rounded-md text-[11px] font-semibold">{score}</span>;
}

// ================================================================
// Teacher Page
// ================================================================
export default function TeacherPage() {
  const router = useRouter();
  const [allProgress, setAllProgress] = useState<Record<string, ProgressRow[]>>({});
  const [expandedStudent, setExpandedStudent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const totalThemes = grammarData.length;

  // Auth check
  useEffect(() => {
    const role = sessionStorage.getItem("gm_role");
    if (role !== "teacher") {
      router.push("/");
      return;
    }

    fetchAllStudentProgress().then((data) => {
      setAllProgress(data);
      setIsLoading(false);
    });
  }, [router]);

  // Realtime subscription — all students
  useEffect(() => {
    const channel = supabase
      .channel("all-progress")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "grammar_progress" },
        (payload) => {
          const row = payload.new as ProgressRow;
          if (!row?.student_id) return;
          setAllProgress((prev) => {
            const studentRows = prev[row.student_id] ?? [];
            const existingIdx = studentRows.findIndex((r) => r.theme_id === row.theme_id);
            let newRows: ProgressRow[];
            if (existingIdx >= 0) {
              newRows = [...studentRows];
              newRows[existingIdx] = row;
            } else {
              newRows = [row, ...studentRows];
            }
            return { ...prev, [row.student_id]: newRows };
          });
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("gm_role");
    router.push("/");
  };

  const getStats = (rows: ProgressRow[]) => {
    let quizCount = 0;
    let transCount = 0;
    let lastUpdated = 0;

    rows.forEach((row) => {
      const quizData = row.quiz_data as Record<string, unknown>;
      if (quizData?.correct) quizCount++;
      const examples = row.examples_data as Record<string, unknown>;
      const advanced = row.advanced_data as Record<string, unknown>;
      if (
        (examples && Object.keys(examples).length > 0) ||
        (advanced && Object.keys(advanced).length > 0)
      ) transCount++;
      const t = new Date(row.last_updated_at ?? 0).getTime();
      if (t > lastUpdated) lastUpdated = t;
    });

    return { quizCount, transCount, lastUpdated };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-[#007AFF] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-[#86868B] text-[15px] font-medium">読み込み中...</p>
        </div>
      </div>
    );
  }

  const studentIds = Object.keys(allProgress);

  return (
    <div className="min-h-screen bg-[#F5F5F7] font-sans text-[#1D1D1F] tracking-tight">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="max-w-5xl mx-auto px-4 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#1D1D1F]">
            <BarChart3 className="w-5 h-5 text-[#007AFF]" />
            <h1 className="text-[17px] font-semibold">Teacher Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="text-[14px] font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors"
          >
            ログアウト
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8 px-2">
          <h2 className="text-[28px] font-bold text-[#1D1D1F] mb-1">学習進捗データ</h2>
          <p className="text-[#86868B] font-medium text-[15px]">
            教室全体のデータがリアルタイムで同期されています
          </p>
        </div>

        <div className="grid gap-5">
          {studentIds.length === 0 ? (
            <div className="p-10 text-center bg-white rounded-[24px] border border-zinc-100">
              <Users className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
              <p className="text-[#86868B] font-medium">
                まだ学習を開始している生徒はいません。
              </p>
            </div>
          ) : (
            studentIds.map((sid) => {
              const rows = allProgress[sid];
              const { quizCount, transCount, lastUpdated } = getStats(rows);
              const quizRate = Math.round((quizCount / totalThemes) * 100);
              const transRate = Math.round((transCount / totalThemes) * 100);
              const lastActive = lastUpdated
                ? new Date(lastUpdated).toLocaleString("ja-JP", {
                    month: "short", day: "numeric",
                    hour: "2-digit", minute: "2-digit",
                  })
                : "—";

              return (
                <div
                  key={sid}
                  className="bg-white p-6 rounded-[24px] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] border border-zinc-100"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    {/* Student ID */}
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <div className="w-14 h-14 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0">
                        <User className="w-6 h-6 text-[#86868B]" />
                      </div>
                      <div>
                        <div className="text-[11px] text-[#86868B] font-semibold mb-0.5 tracking-wider">
                          STUDENT ID
                        </div>
                        <div className="text-[20px] font-bold text-[#1D1D1F]">{sid}</div>
                      </div>
                    </div>

                    {/* Progress bars */}
                    <div className="flex-1 w-full space-y-5">
                      <div>
                        <div className="flex justify-between text-[13px] font-semibold mb-2">
                          <span className="text-[#86868B] flex items-center gap-1.5">
                            <BrainCircuit className="w-4 h-4" /> クイズ正解
                          </span>
                          <span className="text-[#1D1D1F]">{quizCount} / {totalThemes}</span>
                        </div>
                        <div className="w-full bg-[#F5F5F7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#34C759] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${quizRate}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[13px] font-semibold mb-2">
                          <span className="text-[#86868B] flex items-center gap-1.5">
                            <MessageCircle className="w-4 h-4" /> 翻訳チャレンジ
                          </span>
                          <span className="text-[#1D1D1F]">{transCount} / {totalThemes}</span>
                        </div>
                        <div className="w-full bg-[#F5F5F7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#007AFF] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${transRate}%` }} />
                        </div>
                      </div>
                    </div>

                    {/* Last active + detail button */}
                    <div className="flex flex-col items-end gap-3 min-w-[120px] md:border-l md:border-zinc-100 md:pl-6 pt-4 md:pt-0 border-t w-full md:w-auto">
                      <div className="text-right">
                        <div className="text-[11px] font-semibold text-[#86868B] mb-0.5">LAST ACTIVE</div>
                        <div className="text-[14px] font-medium text-[#1D1D1F]">{lastActive}</div>
                      </div>
                      <button
                        onClick={() => setExpandedStudent(expandedStudent === sid ? null : sid)}
                        className="px-5 py-2 bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E9E9EB] text-[13px] font-semibold rounded-full transition-colors w-full"
                      >
                        {expandedStudent === sid ? "閉じる" : "詳細"}
                      </button>
                    </div>
                  </div>

                  {/* Expanded detail */}
                  {expandedStudent === sid && (
                    <div className="mt-6 border-t border-zinc-100 pt-6 animate-slide-down">
                      <h4 className="font-semibold text-[#1D1D1F] mb-4 text-[15px]">
                        テーマ別 詳細
                      </h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        {rows.map((row) => {
                          const theme = grammarData.find((t) => t.id === row.theme_id);
                          if (!theme) return null;
                          const quizData = row.quiz_data as Record<string, unknown>;
                          const examples = row.examples_data as Record<string, unknown>;

                          return (
                            <div key={row.theme_id} className="bg-[#F5F5F7] rounded-[16px] p-4">
                              <div className="font-semibold text-[#1D1D1F] mb-3 text-[14px]">
                                {theme.theme_number}: {theme.title}
                              </div>

                              {/* Quiz */}
                              <div className="mb-4">
                                <span className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider block mb-1">
                                  クイズ
                                </span>
                                <div className="text-[13px] bg-white p-2.5 rounded-[12px]">
                                  {quizData && Object.keys(quizData).length > 0 ? (
                                    quizData.correct ? (
                                      <span className="text-[#008A00] font-semibold flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4" /> 正解
                                      </span>
                                    ) : (
                                      <span className="text-[#FF3B30] font-semibold flex items-center gap-1.5">
                                        <HelpCircle className="w-4 h-4" /> 不正解
                                      </span>
                                    )
                                  ) : (
                                    <span className="text-[#86868B]">未回答</span>
                                  )}
                                </div>
                              </div>

                              {/* Examples */}
                              {examples && Object.keys(examples).length > 0 && (
                                <div>
                                  <span className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider block mb-1">
                                    例題
                                  </span>
                                  <div className="space-y-2">
                                    {Object.entries(examples).map(([idx, val]) => {
                                      const entry = val as Record<string, unknown>;
                                      return (
                                        <div key={idx} className="text-[13px] bg-white p-3 rounded-[12px]">
                                          <div className="font-semibold mb-1.5 flex items-center justify-between">
                                            <span className="text-[#86868B] text-[12px]">例題 {Number(idx) + 1}</span>
                                            <ScoreBadge score={entry.score as string} />
                                          </div>
                                          <div className="text-[#1D1D1F] font-medium leading-relaxed">
                                            「{entry.text as string}」
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}
