<template>
	<section
		class="mt-6 border border-card border-[1px] p-6 edgeBorder text-[21px] font-light min-w-[250px] sm:min-w-[600px] md:min-w-[700px]"
	>
		<slot />
	</section>
</template>

<script setup></script>

<style scoped>
.edgeBorder {
	background: linear-gradient(to right, #26dafd 2px, transparent 2px) 0 0,
		linear-gradient(to right, #26dafd 2px, transparent 2px) 0 100%,
		linear-gradient(to left, #26dafd 2px, transparent 2px) 100% 0,
		linear-gradient(to left, #26dafd 2px, transparent 2px) 100% 100%,
		linear-gradient(to bottom, #26dafd 2px, transparent 2px) 0 0,
		linear-gradient(to bottom, #26dafd 2px, transparent 2px) 100% 0,
		linear-gradient(to top, #26dafd 2px, transparent 2px) 0 100%,
		linear-gradient(to top, #26dafd 2px, transparent 2px) 100% 100%;

	background-repeat: no-repeat;
	background-size: 30px 30px;
}
</style>
