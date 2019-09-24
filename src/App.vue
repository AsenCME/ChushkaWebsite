<template>
	<div id="app">
		<nav class="nav-panel">
			<Navigation/>
		</nav>
		<main class="main-panel">
			<router-view/>
			<Footer/>
		</main>
	</div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
	components: { Navigation, Footer },
};
</script>


<style lang="scss">
body,
html,
#app {
	padding: 0px;
	margin: 0px;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
* {
	box-sizing: border-box;
}
#app {
	font-family: "Ubuntu Condensed", sans-serif;
	// font-family: "Montserrat", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
}
.nav-panel {
	width: 270px;
	height: 100%;
	top: 0px;
	left: 0px;
	z-index: 100;
}
.main-panel {
	width: calc(100% - 270px);
	height: 100%;
	overflow: auto;
	background-color: #ccc;
}

.header-image {
	width: 100% !important;
	height: 70vh !important;
	margin-bottom: -10px;
	background-size: cover;
	background-position: 0% 70%;
	z-index: 2;
}

@media screen and (max-width: 1024px) {
	.nav-panel {
		width: 270px;
	}
	.main-panel {
		width: calc(100% - 270px);
	}
	.header-image {
		height: 50vh;
	}
}
@media screen and (max-width: 768px) {
	.nav-panel {
		width: 0px;
	}
	.main-panel {
		width: 100%;
	}
	body,
	html,
	#app {
		height: auto;
		overflow: auto;
	}
	.header-image {
		height: 40vh;
	}
}
</style>
