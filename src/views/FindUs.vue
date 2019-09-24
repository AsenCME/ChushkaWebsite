<template>
	<div class="findus">
		<div @click="map()" class="map"></div>
		<div class="locations">
			<div class="location">
				<div class="name">{{displayLang.location.name}}</div>
				<div class="address">{{displayLang.location.address}}</div>
			</div>
			<div class="location">
				<div class="name">{{displayLang.workHours.name}}</div>
				<div class="address">{{displayLang.workHours.work1}}</div>
				<div class="address">{{displayLang.workHours.work2}}</div>
				<div class="address">{{displayLang.workHours.work3}}</div>
			</div>
		</div>
		<Contacts />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Contacts from "@/components/Contacts.vue";

export default {
	components: { Contacts },
	computed: {
		...mapGetters(["displayLang"]),
	},
	methods: {
		map() {
			window.open(
				"https://www.google.bg/maps/place/%D0%A7%D1%83%D1%88%D0%BA%D0%B0/@42.0231813,23.1007791,15z/data=!4m2!3m1!1s0x0:0x69cafd6d655f58b1?sa=X&ved=0ahUKEwig_fHk86jcAhUGjiwKHY_rBFsQ_BIIqQEwCg",
				"_blank",
			);
		},
	},
};
</script>

<style lang="scss" scoped>
.locations {
	background-color: #24292d;
	padding: 5vmax;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	.location {
		width: 20%;
		margin: 0px 50px;
		.name {
			font-family: "Ubuntu Condensed";
			margin-bottom: 50px;
			font-size: 40px;
			color: #fff;
			text-align: center;
		}
		.address {
			font-size: 20px;
			color: #ccc;
			line-height: 150%;
			text-align: center;
		}
	}
}

.map {
	cursor: pointer;
	height: 80vh;
	width: 100%;
	background-image: url("./../assets/map.png");
	background-position: center;
	background-size: cover;
}

@media screen and (max-width: 1024px) {
	.location {
		width: 100% !important;
		margin: 50px 20px !important;
	}
}
</style>
