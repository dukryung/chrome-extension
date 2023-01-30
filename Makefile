ORIGINFILEDIR = ${CURDIR}/.svelte-kit/output/prerendered/pages/
COPYFILEDIR =  ${CURDIR}/.svelte-kit/output/client/
FILE = index.html

build:
	if [ -d ${CURDIR}/.svelte-kit ]; then \
		rm -rf -d ${CURDIR}/.svelte-kit; \
		echo "remove ${CURDIR}/.svelte-kit"; \
	fi
	if [ -d ${CURDIR}/build ]; then \
    		rm -rf -d ${CURDIR}/build; \
    		echo "remove ${CURDIR}/build"; \
	fi
	npm install -D sveltekit-adapter-chrome-extension
	npm run build

dev:
	npm run dev
