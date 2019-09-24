<template>
	<Slick :class="{'menu-slide': higher}" ref="slick" :options="slickOptions" style="background-color: #29292a;">
		<progressive-background v-for="(url, index) of images" :key="index" v-bind:src="url" class="carousel-item" />
	</Slick>
</template>

<script>
import Slick from "vue-slick";
import "@/../node_modules/slick-carousel/slick/slick.css";

export default {
	components: { Slick },
	props: {
		imagesProp: {},
		higher: null,
	},
	data() {
		return {
			slickOptions: {
				arrows: false,
				infinite: false,
				autoplay: true,
				autoplaySpeed: 3000,
				pauseOnHover: false,
				respondTo: "slider",
			},
			images: [
				"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
				"https://images.theconversation.com/files/180401/original/file-20170731-22175-67v3q2.jpg",
				"http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/5b/gd/p05bgdd2.jpg",
			],
		};
	},
	created() {
		if (this.imagesProp) this.images = this.imagesProp;
	},
};
</script>

<style scoped>
.carousel-item {
	background-size: cover;
	background-position: bottom;
	width: 100%;
	height: 25vw;
	margin-bottom: -5px;
}
.menu-slide .carousel-item {
	height: 30vw;
}
@media screen and (max-width: 768px) {
	.carousel-item {
		height: 50vh;
	}
	.menu-slide .carousel-item {
		height: 70vh;
	}
}
</style>
