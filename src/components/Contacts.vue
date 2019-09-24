<template>
	<div class="contacts-wrapper">
		<div class="line"></div>
		<div class="contacts">
			<div class="contact" @click="goto('mailto:contacts@chushka.eu')">
				<i class="far fa-envelope"></i>
				<div class="name">Email Us</div>
				<div class="content">contacts@chushka.eu</div>
			</div>
			<div class="contact" @click="goto('tel:+359893099399')">
				<i class="fa fa-mobile-alt"></i>
				<div class="name">Call Us</div>
				<div class="content">0893 099 399</div>
			</div>
			<div class="contact" @click="gotoMap()">
				<i class="fa fa-thumbtack"></i>
				<div class="name">Find Us</div>
				<div class="content">Blageovgrad, Bulgaria</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goto(link) {
			window.location.href = link;
		},
		gotoMap() {
			window.open(
				"https://www.google.bg/maps/place/%D0%A7%D1%83%D1%88%D0%BA%D0%B0/@42.0231813,23.1007791,15z/data=!4m2!3m1!1s0x0:0x69cafd6d655f58b1?sa=X&ved=0ahUKEwig_fHk86jcAhUGjiwKHY_rBFsQ_BIIqQEwCg",
				"_blank",
			);
		},
	},
};
</script>

<style lang="scss" scoped>
.contacts-wrapper {
	background-color: #242424;
	padding: 2vmax;
	font-family: "Montserrat", sans-serif;
	.line {
		height: 1px;
		width: 100%;
		background-color: #424242;
		margin: 30px 0px;
	}
	.contacts {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		flex-grow: 1;
		.contact {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background-color: #313539;
			padding: 3vmax;
			width: 100%;
			margin-right: 40px;
			color: #fff;
			font-size: 16px;
			font-weight: 300;
			&:last-of-type {
				margin-right: 0px;
			}

			i {
				color: burlywood;
				font-size: 30px;
			}
			.name {
				margin: 20px 0px;
			}
			.content {
				color: #ccc;
				text-align: center;
				a {
					text-decoration: none;
					color: #ccc;
				}
			}

			transform: scale(1);
			transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
			&:hover {
				transform: scale(0.95);
			}
		}
	}
}

@media screen and (max-width: 1024px) {
	.contacts {
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		.contact {
			margin: 10px 0px;
			margin-right: 0px !important;
		}
	}
}
</style>
