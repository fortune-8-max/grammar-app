"use client";

import { useState } from "react";
import { BrainCircuit, CheckCircle2, HelpCircle } from "lucide-react";
import type { Quiz } from "@/data/grammar-data";

type Props = {
  quiz: Quiz;
  themeId: string;
  onProgress: (themeId: string, type: string, data: Record<string, unknown>) => void;
};

export default function PointCheckQuiz({ quiz, themeId, onProgress }: Props) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!quiz) return null;

  const handleSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    const isCorrect = selectedOption === quiz.answer;
    onProgress(themeId, "quiz", { correct: isCorrect, selectedOption });
  };

  const isCorrect = selectedOption === quiz.answer;

  return (
    <div className="bg-white rounded-[24px] p-6 md:p-8 mb-10 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] border border-zinc-100">
      <div className="flex items-center gap-2 mb-5">
        <BrainCircuit className="w-6 h-6 text-[#007AFF]" />
        <h3 className="text-[17px] font-semibold text-[#1D1D1F]">
          ポイント確認クイズ
        </h3>
      </div>

      <p className="text-[16px] font-medium text-[#1D1D1F] mb-6 leading-relaxed">
        {quiz.question}
      </p>

      <div className="space-y-3 mb-6">
        {quiz.options.map((option, idx) => {
          let btnClass =
            "w-full text-left p-4 rounded-[16px] border transition-all duration-300 font-medium ";

          if (!isSubmitted) {
            btnClass +=
              selectedOption === idx
                ? "border-[#007AFF] bg-[#007AFF]/5 text-[#007AFF]"
                : "border-zinc-200/80 bg-white text-[#1D1D1F] hover:border-zinc-300 hover:bg-zinc-50/50";
          } else {
            if (idx === quiz.answer) {
              btnClass += "border-[#34C759] bg-[#34C759]/10 text-[#008A00]";
            } else if (idx === selectedOption) {
              btnClass += "border-[#FF3B30] bg-[#FF3B30]/5 text-[#FF3B30] opacity-80";
            } else {
              btnClass += "border-zinc-100 bg-white text-[#86868B] opacity-50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isSubmitted}
              className={btnClass}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full border text-xs shrink-0 transition-colors ${
                    isSubmitted && idx === quiz.answer
                      ? "bg-[#34C759] border-[#34C759] text-white"
                      : isSubmitted && idx === selectedOption
                      ? "bg-[#FF3B30] border-[#FF3B30] text-white"
                      : selectedOption === idx
                      ? "bg-[#007AFF] border-[#007AFF] text-white"
                      : "border-zinc-300 text-zinc-500"
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-[15px]">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className="w-full py-3.5 bg-[#007AFF] hover:bg-[#007AFF]/90 disabled:bg-zinc-200 disabled:text-zinc-400 text-white font-semibold rounded-[16px] transition-all duration-200 active:scale-[0.98]"
        >
          回答する
        </button>
      ) : (
        <div
          className={`p-5 rounded-[16px] animate-slide-down ${
            isCorrect ? "bg-[#34C759]/10" : "bg-[#FF3B30]/5"
          }`}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle2 className="w-6 h-6 text-[#34C759] shrink-0" />
            ) : (
              <HelpCircle className="w-6 h-6 text-[#FF3B30] shrink-0" />
            )}
            <div>
              <p
                className={`font-semibold mb-2 ${
                  isCorrect ? "text-[#008A00]" : "text-[#FF3B30]"
                }`}
              >
                {isCorrect ? "正解です！素晴らしい！" : "残念！解説を確認しましょう。"}
              </p>
              <p className="text-[14px] text-[#1D1D1F] leading-relaxed font-medium">
                {quiz.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
