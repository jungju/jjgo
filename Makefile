CONTENT_SCRIPT := scripts/sync-content-to-src.mjs
GIT_PUSH_SCRIPT := scripts/codex-git-push.sh

.PHONY: content dev build preview deploy check sound copilot-push git-push

content:
	node $(CONTENT_SCRIPT)
	node scripts/sync-content-media.mjs

dev: content
	npm run dev

build: content
	npm run build

preview: content
	npm run preview

check: content
	npm run check

deploy: content
	npm run deploy:gh-pages

git-push:
	@bash $(GIT_PUSH_SCRIPT)
