<script lang="ts" setup>
import { reactive } from "vue";
import { useAuthStore } from "~@modules/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const form = reactive({ email: "", password: "" });

const handleSubmit = () => {
	authStore.login(form);
	router.push({ name: "Home" });
};
</script>

<template>
	<h1>Login</h1>
	<form @submit.prevent="handleSubmit">
		<input type="text" v-model="form.email" />
		<input type="text" v-model="form.password" />
		<button type="submit">Login</button>
	</form>
</template>
