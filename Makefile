CONTENT_SCRIPT := scripts/sync-content-to-src.mjs
CONTENT_SOURCE := $(shell find content/posts -type f -name 'index.md' 2>/dev/null)
CONTENT_OUTPUT := src/lib/data/stories.generated.ts
GIT_PUSH_SCRIPT := scripts/codex-git-push.sh

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

deploy: content
	yarn run deploy:gh-pages

git-push:
	@bash $(GIT_PUSH_SCRIPT)
