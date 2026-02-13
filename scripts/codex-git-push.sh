#!/usr/bin/env bash
set -euo pipefail

if ! command -v codex >/dev/null 2>&1; then
	echo "codex CLI is required."
	exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
	echo "This command must be run inside a git repository."
	exit 1
fi

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

current_branch="$(git branch --show-current)"
if [ "$current_branch" != "main" ]; then
	echo "Current branch is '$current_branch'. Switch to 'main' and retry."
	exit 1
fi

if [ -z "$(git status --porcelain)" ]; then
	echo "No changes to commit."
	exit 0
fi

if ! codex login status >/dev/null 2>&1; then
	echo "Codex CLI login is required. Run: codex login"
	exit 1
fi

codex exec --full-auto --cd "$repo_root" - <<'PROMPT'
You are in a local git repository. Commit and push the current working tree.

Task:
1. Inspect all staged/unstaged/untracked changes.
2. Split the changes into coherent, minimal commits by topic.
3. Use concise Conventional Commit messages.
4. Commit all current changes.
5. Push to origin main.

Constraints:
- Use non-interactive commands only. Do not open editors or interactive prompts.
- Do not amend or rewrite existing commits.
- Never force-push.
- Keep each commit focused and internally consistent.
- After each commit, verify that staged content matches the commit message.
- At the end, print the pushed commit list as "<short_sha> <subject>".
PROMPT
