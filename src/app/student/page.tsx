"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  BookOpen,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { grammarData, type GrammarTheme } from "@/data/grammar-data";
import {
  supabase,
  fetchStudentProgress,
  saveStudentProgress,
  type ProgressRow,
} from "@/lib/supabase";
import PointCheckQuiz from "@/components/PointCheckQuiz";
import AccordionCard from "@/components/AccordionCard";

export default function StudentPage() {
  const router = useRouter();
  const [studentId, setStudentId] = useState<string>("");
  const [selectedTheme, setSelectedTheme] = useState<GrammarTheme | null>(null);
  const [progress, setProgress] = useState<Record<string, ProgressRow>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Auth check & load progress
  useEffect(() => {
    const role = sessionStorage.getItem("gm_role");
    const sid = sessionStorage.getItem("gm_student_id");
    if (role !== "student" || !sid) {
      router.push("/");
      return;
    }
    setStudentId(sid);

    fetchStudentProgress(sid).then((data) => {
      setProgress(data);
      setIsLoading(false);
    });
  }, [router]);

  // Realtime subscription
  useEffect(() => {
    if (!studentId) return;
    const channel = supabase
      .channel(`progress-${studentId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "grammar_progress",
          filter: `student_id=eq.${studentId}`,
        },
        (payload) => {
          const row = payload.new as ProgressRow;
          if (row?.theme_id) {
            setProgress((prev) => ({ ...prev, [row.theme_id]: row }));
          }
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [studentId]);

  // Scroll to top on theme change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedTheme]);

  // Progress handler
  const handleProgress = useCallback(
    async (themeId: string, type: string, data: Record<string, unknown>) => {
      if (!studentId) return;

      const current = progress[themeId] ?? {
        student_id: studentId,
        theme_id: themeId,
        quiz_data: {},
        examples_data: {},
        advanced_data: {},
      };

      let updates: Partial<Pick<ProgressRow, "quiz_data" | "examples_data" | "advanced_data">>;

      if (type === "quiz") {
        updates = { quiz_data: data };
      } else if (type === "translated") {
        const { itemType, index, score, text } = data as {
          itemType: string;
          index: number;
          score: string;
          text: string;
        };
        if (itemType === "example") {
          updates = {
            examples_data: {
              ...((current.examples_data as Record<string, unknown>) ?? {}),
              [index]: { score, text, timestamp: Date.now() },
            },
          };
        } else {
          updates = {
            advanced_data: {
              ...((current.advanced_data as Record<string, unknown>) ?? {}),
              [index]: { score, text, timestamp: Date.now() },
            },
          };
        }
      } else {
        return;
      }

      // Optimistic update
      const updatedRow = { ...current, ...updates };
      setProgress((prev) => ({ ...prev, [themeId]: updatedRow as ProgressRow }));

      await saveStudentProgress(studentId, themeId, {
        quiz_data: (updatedRow as ProgressRow).quiz_data,
        examples_data: (updatedRow as ProgressRow).examples_data,
        advanced_data: (updatedRow as ProgressRow).advanced_data,
      });
    },
    [studentId, progress]
  );

  const handleLogout = () => {
    sessionStorage.removeItem("gm_role");
    sessionStorage.removeItem("gm_student_id");
    router.push("/");
  };

  const getThemeProgress = (themeId: string) => {
    const row = progress[themeId];
    const hasQuiz = (row?.quiz_data as Record<string, unknown>)?.correct === true;
    const examples = row?.examples_data as Record<string, unknown> | undefined;
    const advanced = row?.advanced_data as Record<string, unknown> | undefined;
    const hasTrans =
      (examples && Object.keys(examples).length > 0) ||
      (advanced && Object.keys(advanced).length > 0);
    return { quiz: hasQuiz, trans: !!hasTrans };
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

  return (
    <div className="min-h-screen bg-[#F5F5F7] font-sans text-[#1D1D1F] tracking-tight selection:bg-[#007AFF]/20 selection:text-[#007AFF]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="max-w-3xl mx-auto px-4 h-[60px] flex items-center justify-between">
          <div className="flex items-center">
            {selectedTheme && (
              <button
                onClick={() => setSelectedTheme(null)}
                className="mr-2 text-[#007AFF] hover:bg-[#007AFF]/10 p-1.5 rounded-full transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            <h1 className="text-[17px] font-semibold text-[#1D1D1F]">
              {selectedTheme ? `THEME ${selectedTheme.theme_number}` : "Grammar Mastery"}
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="text-[14px] font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors"
          >
            ログアウト
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* === テーマ一覧 === */}
        {!selectedTheme && (
          <div className="space-y-6 animate-fade-in">
            <div className="mb-8 px-2">
              <h2 className="text-[32px] font-bold text-[#1D1D1F] mb-1 tracking-tight">
                Grammar Mastery
              </h2>
              <p className="text-[#86868B] font-medium text-[15px]">
                ID: {studentId} で学習中
              </p>
            </div>

            <div className="grid gap-4">
              {grammarData.map((theme) => {
                const prog = getThemeProgress(theme.id);
                const isComplete = prog.quiz && prog.trans;
                return (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme)}
                    className={`group flex items-center justify-between p-5 rounded-[24px] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 active:scale-[0.98] ${
                      isComplete ? "bg-white border border-[#34C759]/20" : "bg-white border border-zinc-100"
                    }`}
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isComplete ? "bg-[#34C759]/10 text-[#34C759]" : "bg-[#007AFF]/10 text-[#007AFF]"
                      }`}>
                        {isComplete ? <CheckCircle2 className="w-6 h-6" /> : <BookOpen className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className={`text-[12px] font-semibold mb-0.5 tracking-wider ${
                          isComplete ? "text-[#008A00]" : "text-[#86868B]"
                        }`}>
                          THEME {theme.theme_number}
                        </div>
                        <h3 className="text-[17px] font-semibold text-[#1D1D1F]">
                          {theme.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${prog.quiz ? "bg-[#34C759]" : "bg-zinc-200"}`} />
                        <div className={`w-2 h-2 rounded-full ${prog.trans ? "bg-[#007AFF]" : "bg-zinc-200"}`} />
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#86868B] group-hover:text-[#007AFF] transition-colors" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* === テーマ詳細 === */}
        {selectedTheme && (
          <div className="animate-slide-up">
            <div className="mb-10 px-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#007AFF]/10 text-[#007AFF] text-[13px] font-semibold tracking-wider mb-3">
                THEME {selectedTheme.theme_number}
              </span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#1D1D1F] leading-tight tracking-tight">
                {selectedTheme.title}
              </h2>
            </div>

            {/* 読解のポイント */}
            <div className="bg-white rounded-[24px] p-6 md:p-8 mb-8 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] border border-zinc-100">
              <h3 className="flex items-center gap-2 text-[18px] font-semibold text-[#1D1D1F] mb-5 pb-4 border-b border-zinc-100">
                <GraduationCap className="w-6 h-6 text-[#007AFF]" />
                読解のポイント
              </h3>
              <ul className="space-y-4">
                {selectedTheme.points.map((point, idx) => (
                  <li key={idx} className="flex gap-4 text-[#1D1D1F] leading-relaxed font-medium text-[15px]">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#007AFF]/10 text-[#007AFF] text-[13px] font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* クイズ */}
            <PointCheckQuiz
              quiz={selectedTheme.quiz}
              themeId={selectedTheme.id}
              onProgress={handleProgress}
            />

            {/* 例題 */}
            <div className="mb-10">
              <h3 className="text-[22px] font-bold text-[#1D1D1F] mb-5 px-2 tracking-tight">
                Examples
              </h3>
              <div className="space-y-4">
                {selectedTheme.examples.map((ex, idx) => (
                  <AccordionCard
                    key={`ex-${idx}`}
                    english={ex.english}
                    japanese={ex.japanese}
                    point={ex.point}
                    type="example"
                    themeId={selectedTheme.id}
                    index={idx}
                    onProgress={handleProgress}
                  />
                ))}
              </div>
            </div>

            {/* 発展問題 */}
            {selectedTheme.advanced && selectedTheme.advanced.length > 0 && (
              <div className="mb-20">
                <h3 className="text-[22px] font-bold text-[#1D1D1F] mb-5 px-2 tracking-tight">
                  Advanced
                </h3>
                <div className="space-y-4">
                  {selectedTheme.advanced.map((adv, idx) => (
                    <AccordionCard
                      key={`adv-${idx}`}
                      english={adv.english}
                      japanese={adv.japanese}
                      point={adv.point}
                      source={adv.source}
                      type="advanced"
                      themeId={selectedTheme.id}
                      index={idx}
                      onProgress={handleProgress}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
