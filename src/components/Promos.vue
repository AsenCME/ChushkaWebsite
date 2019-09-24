<template>
	<div class="promo-section">
		<progressive-background class="promo with-image" :src="require('./../assets/images/home_2.jpg')" :placeholder="require('./../assets/images/blurred/home_2.jpg')" />

		<div class="promo">
			<div class="text">{{displayLang.promo2}}</div>
			<div class="line"></div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "promos",
	computed: {
		...mapGetters(["displayLang"]),
	},
};
</script>

<style lang='scss' scoped>
.promo-section {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	background-color: #2b3136;
	.promo {
		width: 50%;
		padding: 3vmax;
		background-color: #24292d;
		&:nth-of-type(2) {
			background-color: #2b3136;
		}
		.type {
			font-family: "Ubuntu Condensed";
			font-size: 16px;
			color: burlywood;
			text-transform: uppercase;
			span {
				color: #ccc;
				margin-left: 10px;
			}
		}
		.text {
			text-transform: uppercase;
			font-size: 25px;
			font-weight: 500;
			color: #ccc;
			margin-top: 20px;
			line-height: 160%;
		}
		.line {
			width: 30%;
			height: 1px;
			background-color: #424242;
			margin: 20px 0px;
		}
		&.with-image {
			padding: 0px;
			height: auto;
			background-size: cover;
			background-position: bottom;
		}
	}
}

@media screen and (max-width: 1024px) {
	.promo-section {
		flex-direction: column;
		.promo {
			width: 100%;
			.type {
				font-size: 14px;
			}
			.text {
				font-size: 20px;
			}
		}
	}
}
</style>
