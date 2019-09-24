<template>
	<div class="home">
		<!-- <Carousel/> -->
		<progressive-background class="header-image" :src="require('./../assets/images/home_1.jpg')" :placeholder="require('./../assets/images/blurred/home_1.jpg')" />

		<div class="intro-section">
			<div class="left-side">
				<div class="title">{{displayLang.home.title}}</div>
				<div class="slogan">{{displayLang.home.slogan}}</div>
				<div class="line"></div>
				<div class="images">
					<img src="./../assets/images/home_section_1.jpg" alt="section showcase image" />
				</div>
				<div class="text">
					<p>{{displayLang.home.introText1}}</p>
					<p>{{displayLang.home.introText2}}</p>
					<p>{{displayLang.home.introText3}}</p>
				</div>
			</div>
			<div class="right-side">
				<progressive-background class="background" :src="require('./../assets/images/home_section_2.jpg')" :placeholder="require('./../assets/images/blurred/home_section_2.jpg')" />
			</div>
		</div>

		<div class="fixed-section">
			<div class="title">{{displayLang.fs1}}</div>
			<div class="line"></div>
			<div class="text">
				{{displayLang.fixedStatement}}
				<span>.</span>
			</div>
		</div>

		<Promos />

		<div class="fixed-section-2">
			<div class="title">{{displayLang.fs2}}</div>
			<div class="line"></div>
			<div class="text">
				{{displayLang.fixedStatement2}}
				<span>.</span>
			</div>
		</div>

		<Contacts />

	</div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Contacts from "@/components/Contacts.vue";
import Promos from "@/components/Promos.vue";

import { mapGetters } from "vuex";

export default {
	name: "home",
	components: { Carousel, Contacts, Promos },
	methods: {
		goto(link) {
			window.location = link;
		},
		gotoMap() {
			window.open("https://www.google.bg/maps/place/Blagoevgrad/", "blank");
		},
	},
	computed: {
		...mapGetters(["displayLang"]),
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>

