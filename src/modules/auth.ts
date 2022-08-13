import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		token: localStorage.getItem("token"),
	}),
	actions: {
		async me() {
			if (this.token.startsWith("admin")) return true;
			else {
				this.token = null;
				throw new Error();
			}
		},
		async login({ email, password }) {
			const token = email + password;
			localStorage.setItem("token", token);
			this.token = token;
		},
		logout() {
			localStorage.removeItem("token");
			this.token = null;
		},
	},
});
