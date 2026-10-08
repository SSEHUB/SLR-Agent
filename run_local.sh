#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$SCRIPT_DIR/workspace"

mkdir -p "$WORKSPACE_DIR/pdfs" "$WORKSPACE_DIR/seed" "$WORKSPACE_DIR/tmp"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: node is not installed. Please install Node.js >= 22.19.0." >&2
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed." >&2
  exit 1
fi

if ! node -e 'const [major, minor] = process.versions.node.split(".").map(Number); process.exit(major > 22 || (major === 22 && minor >= 19) ? 0 : 1)'; then
  echo "Error: Node.js >= 22.19.0 is required (current: $(node -v))." >&2
  exit 1
fi

if [[ ! -d "$SCRIPT_DIR/node_modules" ]]; then
  echo "Installing dependencies (npm install --ignore-scripts)..."
  npm --prefix "$SCRIPT_DIR" install --ignore-scripts
fi

cd "$WORKSPACE_DIR"
exec "$SCRIPT_DIR/pi-test.sh" --extension "$SCRIPT_DIR/extensions" "$@"
