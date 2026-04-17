-- ================================================================
-- Grammar Mastery — Supabase テーブル設定
-- Supabase Console の SQL Editor で実行してください
-- ================================================================

-- 生徒の学習進捗テーブル
CREATE TABLE IF NOT EXISTS grammar_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id TEXT NOT NULL,
  theme_id TEXT NOT NULL,
  quiz_data JSONB DEFAULT '{}',
  examples_data JSONB DEFAULT '{}',
  advanced_data JSONB DEFAULT '{}',
  last_updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, theme_id)
);

-- インデックス（検索の高速化）
CREATE INDEX IF NOT EXISTS idx_grammar_progress_student_id ON grammar_progress(student_id);
CREATE INDEX IF NOT EXISTS idx_grammar_progress_theme_id ON grammar_progress(theme_id);

-- Row Level Security（RLS）を有効化
ALTER TABLE grammar_progress ENABLE ROW LEVEL SECURITY;

-- 全アクセスを許可（学校内利用のため）
CREATE POLICY "Allow all access" ON grammar_progress
  FOR ALL USING (true) WITH CHECK (true);

-- リアルタイム更新を有効化
ALTER PUBLICATION supabase_realtime ADD TABLE grammar_progress;
