CONTENT_SCRIPT := scripts/sync-content-to-src.mjs
CONTENT_SOURCE := $(wildcard content/posts/published/*.md)
CONTENT_OUTPUT := src/lib/data/stories.generated.ts

.PHONY: content dev build preview deploy check sound

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
	yarn run deploy