<template>
	<header>
		<nav>
			<RouterLink :to="{ name: 'Home' }">{{ $t("nav.home") }}</RouterLink>
			<RouterLink :to="{ name: 'Launch' }">{{ $t("nav.launch") }}</RouterLink>
			<RouterLink :to="{ name: 'Upcoming' }">{{ $t("nav.upcoming") }}</RouterLink>
			<RouterLink :to="{ name: 'History' }">{{ $t("nav.history") }}</RouterLink>
		</nav>
	</header>
</template>
