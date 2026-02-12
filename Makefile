CONTENT_SCRIPT := scripts/sync-content-to-src.mjs
CONTENT_SOURCE := $(shell find content/posts -type f -name 'index.md' 2>/dev/null)
CONTENT_OUTPUT := src/lib/data/stories.generated.ts

.PHONY: content dev build preview deploy check sound copilot-push git-push

content: $(CONTENT_OUTPUT)

$(CONTENT_OUTPUT): $(CONTENT_SCRIPT) $(CONTENT_SOURCE)
	node $(CONTENT_SCRIPT)

dev: content
	yarn run dev

build: content
	yarn run build

preview: content
	yarn run preview

check: content
	yarn run check

deploy: content git-push
	yarn run deploy:gh-pages

git-push:
	@set -eu; \
	if ! command -v gh >/dev/null 2>&1; then \
		echo "gh CLI is required."; \
		exit 1; \
	fi; \
	if [ -z "$$(git status --porcelain)" ]; then \
		echo "No changes to commit."; \
		exit 0; \
	fi; \
	git add -A; \
	if [ -z "$$(git diff --cached --name-only)" ]; then \
		echo "No staged changes after git add."; \
		exit 0; \
	fi; \
	MSG="$$(gh copilot -s -p "Write one concise conventional commit message for staged git diff. Output only the message in one line." \
		--allow-all-tools \
		--allow-tool 'shell(git status --short)' \
		--allow-tool 'shell(git diff --cached --)' || true)"; \
	MSG="$$(printf '%s\n' "$$MSG" | head -n 1 | tr -d '\r')"; \
	if [ -z "$$MSG" ]; then \
		MSG="chore: update project files"; \
	fi; \
	echo "Commit message: $$MSG"; \
	git commit -m "$$MSG"; \
	BRANCH="$$(git branch --show-current)"; \
	git push origin "$$BRANCH"
