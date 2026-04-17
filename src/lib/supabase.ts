"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: { params: { eventsPerSecond: 10 } },
});

// ================================================================
// Types
// ================================================================
export type ProgressRow = {
  id?: string;
  student_id: string;
  theme_id: string;
  quiz_data: Record<string, unknown>;
  examples_data: Record<string, unknown>;
  advanced_data: Record<string, unknown>;
  last_updated_at?: string;
};

// ================================================================
// Progress helpers
// ================================================================

/**
 * 生徒の全進捗を取得
 */
export async function fetchStudentProgress(studentId: string): Promise<Record<string, ProgressRow>> {
  const { data, error } = await supabase
    .from("grammar_progress")
    .select("*")
    .eq("student_id", studentId);

  if (error) {
    console.error("fetchStudentProgress error:", error);
    return {};
  }

  const result: Record<string, ProgressRow> = {};
  data?.forEach((row: ProgressRow) => {
    result[row.theme_id] = row;
  });
  return result;
}

/**
 * 生徒の進捗を保存（upsert）
 */
export async function saveStudentProgress(
  studentId: string,
  themeId: string,
  updates: Partial<Pick<ProgressRow, "quiz_data" | "examples_data" | "advanced_data">>
) {
  const { error } = await supabase.from("grammar_progress").upsert(
    {
      student_id: studentId,
      theme_id: themeId,
      quiz_data: updates.quiz_data ?? {},
      examples_data: updates.examples_data ?? {},
      advanced_data: updates.advanced_data ?? {},
      last_updated_at: new Date().toISOString(),
    },
    { onConflict: "student_id,theme_id" }
  );

  if (error) console.error("saveStudentProgress error:", error);
  return !error;
}

/**
 * 全生徒の進捗を取得（先生用）
 */
export async function fetchAllStudentProgress(): Promise<Record<string, ProgressRow[]>> {
  const { data, error } = await supabase
    .from("grammar_progress")
    .select("*")
    .order("last_updated_at", { ascending: false });

  if (error) {
    console.error("fetchAllStudentProgress error:", error);
    return {};
  }

  const result: Record<string, ProgressRow[]> = {};
  data?.forEach((row: ProgressRow) => {
    if (!result[row.student_id]) result[row.student_id] = [];
    result[row.student_id].push(row);
  });
  return result;
}
