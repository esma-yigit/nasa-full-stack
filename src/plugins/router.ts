import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "~@modules/auth";

const routes: RouteRecordRaw[] = [
	{
		name: "Login",
		path: "/login",
		component: () => import("~@views/Login.vue"),
		meta: { isPublic: true },
		beforeEnter: async (to, from, next) => {
			const authStore = useAuthStore();
			try {
				await authStore.me();
				next({ name: "Home" });
			} catch (e) {
				next();
			}
		},
	},
	{
		name: "NotFound",
		path: "/:pathMatch(.*)*",
		component: () => import("~@views/NotFound.vue"),
		meta: { isPublic: true },
	},
	{
		name: "Main",
		path: "/",
		component: () => import("~@layouts/Main.vue"),
		beforeEnter: async (to, from, next) => {
			const authStore = useAuthStore();
			try {
				await authStore.me();
				next();
			} catch (e) {
				next({ name: "Login" });
			}
		},
		children: [
			{
				name: "Home",
				path: "/",
				component: () => import("~@views/Home.vue"),
				meta: { isPublic: false },
			},
		],
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: (to, from, savedPosition) => {
		return savedPosition || { left: 0, top: 0, behavior: "smooth" };
	},
});

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();
	const isAllowed = !!authStore.token || to.meta?.isPublic;
	if (isAllowed) next();
	else next({ name: "Login" });
});
