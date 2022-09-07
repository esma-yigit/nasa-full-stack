<script lang="ts" setup>
import Header from "~@components/Header.vue";
import Footer from "~@components/Footer.vue";
</script>

<template>
	<Header />
	<main>
		<div class="card">
			<router-view />
		</div>
	</main>
	<Footer />
</template>