import { createI18n } from "vue-i18n";
import en from "~@locales/en.json";

export const i18n = createI18n({
	locale: localStorage.getItem("lang") || navigator.language.split("-")[0] || "en",
	messages: {
		en,
	},
});
