LOCALES = en es
SRCDIR = src
GENDIR = src/iso/generated
POT = $(GENDIR)/combined.pot
TRANSLATIONS = src/iso/translations
VUE_FILES = $(shell find src/ui -name "*.vue")
ALL_LOCALE_PO_FILES = $(shell find $(TRANSLATIONS)/locale -name "*.po")


localize: po_json

po_template:
	@# Extract messages from vue __SCRIPT__ tag
	./localize.py extract_messages --input-dirs $(SRCDIR) --output-file $(GENDIR)/js.part.pot
	@# Extract messages from vue __TEMPLATE__ tag
	npx gettext-extract --attribute v-translate --output $(GENDIR)/html.part.pot $(VUE_FILES)
	@# Combine the PO files into one
	msgcat -o $(GENDIR)/combined.pot $(GENDIR)/*.part.pot

po_init: po_template
	@# Create PO for each locale if not aleady exisits.
	@# msginit treats --lang=en a bit differently: it will set the msgstr value to msgid.
	@for lang in $(LOCALES); do \
		export PO_FILE=$(TRANSLATIONS)/locale/$$lang/LC_MESSAGES/app.po; \
		mkdir -p $$(dirname $$PO_FILE); \
		[ -f $$PO_FILE ] || msginit --no-translator --locale=$$lang --input=$(POT) --output-file=$$PO_FILE; \
	done;

po_merge: po_template
	@# When new phrases are added to the template, we need to merge them into each locale
	@for lang in $(LOCALES); do \
		export PO_FILE=$(TRANSLATIONS)/locale/$$lang/LC_MESSAGES/app.po; \
		msgmerge --lang=$$lang --update $$PO_FILE $(POT); \
	done;

po_json: po_merge
	@@npx gettext-compile --output $(TRANSLATIONS)/translations.json $(ALL_LOCALE_PO_FILES)

.PHONY: po_template po_merge po_json localize
