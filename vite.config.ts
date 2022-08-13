import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
	plugins: [vuePlugin()],
	define: {
		__VUE_I18N_FULL_INSTALL__: true,
		__VUE_I18N_LEGACY_API__: false,
		__INTLIFY_PROD_DEVTOOLS__: false,
	},
	resolve: {
		alias: {
			"~@plugins": resolve(__dirname, "./src/plugins"),
			"~@views": resolve(__dirname, "./src/views"),
			"~@layouts": resolve(__dirname, "./src/layouts"),
			"~@locales": resolve(__dirname, "./src/locales"),
			"~@modules": resolve(__dirname, "./src/modules"),
			"~@components": resolve(__dirname, "./src/components"),
		},
	},
});
