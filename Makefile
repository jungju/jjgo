CONTENT_SCRIPT := scripts/sync-content-to-src.mjs
GIT_PUSH_SCRIPT := scripts/codex-git-push.sh

.PHONY: content dev build preview deploy check sound copilot-push git-push

content:
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
