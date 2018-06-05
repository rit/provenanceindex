LOCALES = en es
POT = src/iso/generated/combined.pot
SRCDIR = demo
DESTDIR = src/iso/generated
ALL_LOCALE_PO_FILES = $(shell find $(DESTDIR)/locale -name "*.po")


localize: po_json

po_template:
	@# Extract messages from vue __SCRIPT__ tag
	./localize.py extract_messages --input-dirs demo --output-file src/iso/generated/js.part.pot
	@# Extract messages from vue __TEMPLATE__ tag
	npx gettext-extract --attribute v-translate --output src/iso/generated/html.part.pot demo/**.vue
	@# Combine the PO files into one
	msgcat -o src/iso/generated/combined.pot src/iso/generated/*.part.pot

po_init: po_template
	@# Create PO for each locale if not aleady exisits.
	@# msginit treats --lang=en a bit differently: it will set the msgstr value to msgid.
	@for lang in $(LOCALES); do \
		export PO_FILE=$(DESTDIR)/locale/$$lang/LC_MESSAGES/app.po; \
		mkdir -p $$(dirname $$PO_FILE); \
		[ -f $$PO_FILE ] || msginit --no-translator --locale=$$lang --input=$(POT) --output-file=$$PO_FILE; \
	done;

po_merge: po_template
	@# When new phrases are added to the template, we need to merge them into each locale
	@for lang in $(LOCALES); do \
		export PO_FILE=$(DESTDIR)/locale/$$lang/LC_MESSAGES/app.po; \
		msgmerge --lang=$$lang --update $$PO_FILE $(POT); \
	done;

po_json: po_merge
	@@npx gettext-compile --output $(DESTDIR)/locale/translations.json $(ALL_LOCALE_PO_FILES)

.PHONY: po_template po_merge po_json localize
