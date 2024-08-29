import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import auth from "auth-astro";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: 'always'
	},
	site: 'https://otroladodancecompany.com',
	compressHTML: true,
	prefetch: true,
	devToolbar: {
		enabled: false
	},
	output: "server",
	integrations: [icon(), auth(), tailwind(), sitemap({
		filter: (page) =>
			page !== 'https://otroladodancecompany.com/dashboard/' &&
			page !== 'https://otroladodancecompany.com/dashboard/dancers' &&
			page !== 'https://otroladodancecompany.com/not-authorized/' &&
			page !== 'https://otroladodancecompany.com/login/'
	})],
	adapter: vercel(),
	vite: {
		build: {
			cssMinify: 'lightningcss'
		},
		ssr: {
			noExternal: ["path-to-regexp"]
		}
	}
});
