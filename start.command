#!/bin/zsh
# Grammar Mastery — 長文読解のための英文法 起動スクリプト
# ダブルクリックで起動できます

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="3001"
BASE_URL="http://localhost:${PORT}"

echo "======================================"
echo "  Grammar Mastery 起動中..."
echo "  長文読解のための英文法"
echo "  アプリ: ${APP_DIR}"
echo "======================================"
echo ""

# ── ポートを使っている全プロセスを強制停止 ─────────────────
echo "▶ ポート ${PORT} の既存プロセスを停止..."
PIDS="$(lsof -tiTCP:${PORT} -sTCP:LISTEN 2>/dev/null || true)"
if [[ -n "${PIDS}" ]]; then
  echo "  停止するPID: ${PIDS}"
  echo "${PIDS}" | xargs kill -9 2>/dev/null || true
  sleep 2
  echo "  ✓ ポート ${PORT} が解放されました"
else
  echo "  ✓ ポートは空いています"
fi
echo ""

# ── .next キャッシュ削除 ────────────────────────────────────
echo "▶ .next キャッシュをクリアしています..."
rm -rf "${APP_DIR}/.next"
echo "  ✓ キャッシュクリア完了"
echo ""

# ── Node.js パスを確認 ──────────────────────────────────────
for NVM_DIR_CANDIDATE in "$HOME/.nvm" "/usr/local/opt/nvm" "/opt/homebrew/opt/nvm"; do
  if [[ -f "${NVM_DIR_CANDIDATE}/nvm.sh" ]]; then
    export NVM_DIR="${NVM_DIR_CANDIDATE}"
    source "${NVM_DIR}/nvm.sh" --no-use 2>/dev/null || true
    break
  fi
done
if [[ -d "$HOME/.volta/bin" ]]; then
  export PATH="$HOME/.volta/bin:$PATH"
fi
if command -v fnm &>/dev/null; then
  eval "$(fnm env --use-on-cd 2>/dev/null)" 2>/dev/null || true
fi
for BREW_NODE in "/opt/homebrew/bin" "/usr/local/bin"; do
  if [[ -x "${BREW_NODE}/node" ]]; then
    export PATH="${BREW_NODE}:$PATH"
    break
  fi
done

NODE_VER="$(node --version 2>/dev/null || echo '❌ 未検出')"
echo "▶ 環境確認"
echo "  Node.js : ${NODE_VER}"
if [[ "${NODE_VER}" == "❌ 未検出" ]]; then
  echo "❌ Node.js が見つかりません。"
  read -r "?Enterキーでウィンドウを閉じます..."
  exit 1
fi
echo ""

# ── .env.local が存在するか確認 ────────────────────────────
if [[ ! -f "${APP_DIR}/.env.local" ]]; then
  echo "⚠ .env.local が見つかりません。"
  echo "  .env.local.example をコピーして設定してください。"
  echo "  cp .env.local.example .env.local"
  echo ""
fi

# ── node_modules が存在するか確認 ───────────────────────────
if [[ ! -d "${APP_DIR}/node_modules" ]]; then
  echo "▶ node_modules がありません。npm install を実行します..."
  cd "${APP_DIR}" && npm install
  echo ""
fi

# ── ブラウザを開く ──────────────────────────────────────────
(
  sleep 8
  for i in {1..40}; do
    if curl -sf --max-time 2 "${BASE_URL}/" >/dev/null 2>&1; then
      sleep 1
      open "${BASE_URL}/"
      echo ""
      echo "✓ ブラウザを開きました: ${BASE_URL}/"
      break
    fi
    sleep 2
  done
) &

# ── Next.js 開発サーバー起動 ────────────────────────────────
echo "▶ Next.js 開発サーバーを起動します..."
echo "  URL: ${BASE_URL}"
echo "  停止: Ctrl+C"
echo "======================================"
echo ""
cd "${APP_DIR}"
exec npm run dev -- --port ${PORT}
