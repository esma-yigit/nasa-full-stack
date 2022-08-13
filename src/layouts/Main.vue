<script lang="ts" setup>
import SideBar from "~@components/SideBar.vue";
import Header from "~@components/Header.vue";
import Footer from "~@components/Footer.vue";
</script>

<template>
	<Header />
	<main>
		<SideBar />
		<router-view />
	</main>
	<Footer />
</template>
