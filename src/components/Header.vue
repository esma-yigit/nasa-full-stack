<template>
	<nav
		class="border border-b-secondary border-4 border-t-0 border-l-0 border-r-0 flex justify-center items-center text-light py-4 space-x-4 text-xl capitalize"
	>
		<div>
			<RouterLink :to="{ name: 'Home' }" class="flex items-center">
				<img alt="" src="../../public/favicon.png" />
				<svg
					class="Logo-root-0-1-33 Logo-root-0-1-42 Header-logo-0-1-18 Logo-entered-0-1-39 circle"
					height="50"
					layer="header"
					version="1.1"
					viewBox="0 0 1000 1000"
					width="50"
				>
					<filter id="arwes-logo-filter-blur">
						<feGaussianBlur in="SourceGraphic" stdDeviation="20"></feGaussianBlur>
					</filter>
					<g style="transform: translate(500px, 500px)">
						<circle
							class="Logo-light-0-1-34 Logo-light-0-1-43 Logo-elementFilter-0-1-37"
							cx="0"
							cy="0"
							r="85"
						></circle>
						<circle class="Logo-light-0-1-34 Logo-light-0-1-43" cx="0" cy="0" r="85"></circle>
						<path
							class="Logo-center-0-1-35 Logo-center-0-1-44"
							d="M1.6838893488276108e-14,-275A275,275,0,1,1,-1.6838893488276108e-14,275A275,275,0,1,1,1.6838893488276108e-14,-275M-3.6739403974420595e-14,-200A200,200,0,1,0,3.6739403974420595e-14,200A200,200,0,1,0,-3.6739403974420595e-14,-200Z"
						></path>
						<path
							class="Logo-outer-0-1-36 Logo-outer-0-1-45"
							d="M2.9085361479749636e-14,-475A475,475,0,1,1,-2.9085361479749636e-14,475A475,475,0,1,1,2.9085361479749636e-14,-475M-6.888638245203861e-14,-375A375,375,0,1,0,6.888638245203861e-14,375A375,375,0,1,0,-6.888638245203861e-14,-375Z"
						></path>
						<path
							class="Logo-light-0-1-34 Logo-light-0-1-43 Logo-elementFilter-0-1-37"
							d="M122.93904642369735,-458.81476748730745A475,475,0,0,1,458.8147674873074,122.93904642369743L362.22218485840057,97.05714191344534A375,375,0,0,0,97.05714191344528,-362.2221848584006Z"
						></path>
						<path
							class="Logo-light-0-1-34 Logo-light-0-1-43"
							d="M122.93904642369735,-458.81476748730745A475,475,0,0,1,458.8147674873074,122.93904642369743L362.22218485840057,97.05714191344534A375,375,0,0,0,97.05714191344528,-362.2221848584006Z"
						></path>
						<path
							class="Logo-light-0-1-34 Logo-light-0-1-43 Logo-elementFilter-0-1-37"
							d="M335.8757210636101,335.87572106361006A475,475,0,0,1,-335.87572106361006,335.8757210636101L-265.1650429449553,265.16504294495536A375,375,0,0,0,265.16504294495536,265.1650429449553Z"
						></path>
						<path
							class="Logo-light-0-1-34 Logo-light-0-1-43"
							d="M335.8757210636101,335.87572106361006A475,475,0,0,1,-335.87572106361006,335.8757210636101L-265.1650429449553,265.16504294495536A375,375,0,0,0,265.16504294495536,265.1650429449553Z"
						></path>
						<path
							class="Logo-light-0-1-34 Logo-light-0-1-43 Logo-elementFilter-0-1-37"
							d="M-458.81476748730745,122.93904642369728A475,475,0,0,1,-122.93904642369729,-458.81476748730745L-97.05714191344524,-362.2221848584006A375,375,0,0,0,-362.2221848584006,97.05714191344522Z"
						></path>
						<path
							class="Logo-light-0-1-34 Logo-light-0-1-43"
							d="M-458.81476748730745,122.93904642369728A475,475,0,0,1,-122.93904642369729,-458.81476748730745L-97.05714191344524,-362.2221848584006A375,375,0,0,0,-362.2221848584006,97.05714191344522Z"
						></path>
					</g>
				</svg>
				<span class="text-3xl text-secondary font-bold">NASA Mission Control </span>
			</RouterLink>
		</div>
		<div>
			<RouterLink :to="{ name: 'Launch' }" class="flex items-center"
				><span><img alt="" src="../../public/icon-launch.png" /></span
				><span>{{ $t("nav.launch") }}</span></RouterLink
			>
		</div>
		<div>
			<RouterLink :to="{ name: 'Upcoming' }" class="flex items-center"
				><span><img alt="" src="../../public/icon-upcoming.png" /></span
				><span>{{ $t("nav.upcoming") }}</span></RouterLink
			>
		</div>
		<div>
			<RouterLink :to="{ name: 'History' }" class="flex items-center">
				<span><img alt="" src="../../public/icon-history.png" /></span>
				<span>{{ $t("nav.history") }}</span></RouterLink
			>
		</div>
	</nav>
</template>
<style>
.circle {
	color: #26dafd !important;
	font-size: 21px;
	font-family: "Titillium Web", "sans-serif";
	line-height: 80px;
	width: 50px;
	height: 50px;
	box-sizing: inherit;
	opacity: 1;
	filter: "invert(0)";
	transition: opacity 250ms ease-out;
	vertical-align: middle;
	display: inherit;
	margin-top: 15px;
}
</style>
