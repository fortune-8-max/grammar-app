"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, User, KeyRound } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loginInput, setLoginInput] = useState("");
  const [loginMode, setLoginMode] = useState<"student" | "teacher">("student");
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    setLoginError("");
    if (!loginInput.trim()) {
      setLoginError(
        loginMode === "student"
          ? "生徒番号を入力してください"
          : "パスワードを入力してください"
      );
      return;
    }

    if (loginMode === "teacher") {
      const teacherPassword =
        process.env.NEXT_PUBLIC_TEACHER_PASSWORD ?? "teacher123";
      if (loginInput !== teacherPassword) {
        setLoginError("パスワードが違います");
        return;
      }
      sessionStorage.setItem("gm_role", "teacher");
      router.push("/teacher");
    } else {
      sessionStorage.setItem("gm_role", "student");
      sessionStorage.setItem("gm_student_id", loginInput.trim());
      router.push("/student");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-4 font-sans tracking-tight">
      <div className="max-w-sm w-full bg-white rounded-[32px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-zinc-100 animate-fade-in">
        <div className="w-16 h-16 bg-[#007AFF]/10 rounded-[18px] flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-8 h-8 text-[#007AFF]" />
        </div>
        <h1 className="text-[24px] font-bold text-center text-[#1D1D1F] mb-2">
          Grammar Mastery
        </h1>
        <p className="text-center text-[13px] text-[#86868B] mb-8">
          長文読解のための英文法
        </p>

        {/* 生徒 / 教師 切り替え */}
        <div className="flex p-1 bg-[#F5F5F7] rounded-[16px] mb-8">
          <button
            onClick={() => { setLoginMode("student"); setLoginError(""); setLoginInput(""); }}
            className={`flex-1 py-2 text-[14px] font-semibold rounded-[12px] transition-all ${
              loginMode === "student" ? "bg-white text-[#1D1D1F] shadow-sm" : "text-[#86868B]"
            }`}
          >
            生徒用
          </button>
          <button
            onClick={() => { setLoginMode("teacher"); setLoginError(""); setLoginInput(""); }}
            className={`flex-1 py-2 text-[14px] font-semibold rounded-[12px] transition-all ${
              loginMode === "teacher" ? "bg-white text-[#1D1D1F] shadow-sm" : "text-[#86868B]"
            }`}
          >
            教師用
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                {loginMode === "student" ? (
                  <User className="w-5 h-5 text-[#86868B]" />
                ) : (
                  <KeyRound className="w-5 h-5 text-[#86868B]" />
                )}
              </div>
              <input
                type={loginMode === "student" ? "text" : "password"}
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder={loginMode === "student" ? "生徒番号" : "パスワード"}
                className="w-full pl-12 pr-4 py-3.5 bg-[#F5F5F7] border-none rounded-[16px] text-[#1D1D1F] font-medium focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 transition-all placeholder:text-[#86868B]/70"
              />
            </div>
            {loginError && (
              <p className="text-[#FF3B30] text-[13px] font-medium mt-2 ml-1">
                {loginError}
              </p>
            )}
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3.5 bg-[#007AFF] hover:bg-[#007AFF]/90 text-white font-semibold rounded-[16px] transition-all active:scale-[0.98]"
          >
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
}
