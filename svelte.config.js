// svelte.config.js
import adapter from 'sveltekit-adapter-chrome-extension';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build', // the output directory for the pages of your extension
			assets: undefined, // the asset output directory is derived from pages if not specified explicitly
			manifestVersion: 3 // the version of the automatically generated manifest (Version 3 is required by Chrome).
		}),
		appDir: 'ext', // This is important - chrome extensions can't handle the default _app directory name.
	}
};