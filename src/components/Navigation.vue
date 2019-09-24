<template>
	<div style="width: 100%; height: 100%">
		<div class="navigation">
			<!-- <img src="./../assets/logo.png" alt="logo" class="logo"> -->

			<div class="logo"></div>

			<div class="links">
				<div class="link-item" :class="{active: currentPage === 'home'}" @click="transition('/', $event)">
					<span>{{displayLang.nav.link1}}</span>
				</div>
				<div class="link-item" :class="{active: currentPage === 'menu'}" @click="transition('/menu', $event)">
					<span>{{displayLang.nav.link2}}</span>
				</div>
				<div class="link-item" :class="{active: currentPage === 'about'}" @click="transition('/about', $event)">
					<span>{{displayLang.nav.link3}}</span>
				</div>
				<div class="link-item" :class="{active: currentPage === 'findus'}" @click="transition('/findus', $event)">
					<span>{{displayLang.nav.link4}}</span>
				</div>
				<div class="link-item" :class="{active: currentPage === 'services'}" @click="transition('/services', $event)">
					<span>{{displayLang.nav.link5}}</span>
				</div>
			</div>

			<div class="lang-switch" @click="toggleLang()" :class="{'bg': $store.state.language === 'bg'}">{{language}}</div>

			<div class="socials">
				<div class="social-link facebook" @click="gotoFB()">
					<i class="fab fa-facebook-f"></i>
				</div>
				<div class="social-link tripa" @click="gotoTA()">
					<i class="fab fa-tripadvisor"></i>
				</div>
				<div class="social-link instagram" @click="gotoIG()">
					<i class="fab fa-instagram"></i>
				</div>
				<div class="social-link pin" @click="gotoPin()">
					<i class="fab fa-pinterest"></i>
				</div>
			</div>

			<div class="copy">Created by
				<a href="http://agsoftworks.com">Asen Georgiev</a>
			</div>
		</div>

		<div class="nav-button" @click="toggleMenu()">
			<i class="fas fa-bars"></i>
		</div>

	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			currentPage: "home",
		};
	},
	computed: {
		language() {
			return "";
		},
		...mapGetters(["displayLang"]),
	},
	methods: {
		gotoFB() {
			window.open("https://www.facebook.com/chushkabg/", "_blank");
		},
		gotoTA() {
			window.open(
				"https://www.tripadvisor.com/Restaurant_Review-g1156161-d15145626-Reviews-Chushka-Blagoevgrad_Blagoevgrad_Province.html",
				"_blank",
			);
		},
		gotoIG() {
			window.open(
				"https://www.instagram.com/chushka_blagoevgrad/",
				"_blank",
			);
		},
		gotoPin() {
			window.open("https://www.pinterest.com/chushkabg/", "_blank");
		},

		transition(path, event) {
			let target =
				event.target.innerHTML[0] === "<"
					? event.target
					: event.target.parentNode;

			let already = document.querySelector(".link-item.active");

			if (already && already !== target)
				already.classList.remove("active");
			target.classList.add("active");

			setTimeout(() => {
				this.$router.push({ path: path });
				scroll(0, 0);
				document.querySelector(".main-panel").scrollTop = 0;
				this.toggleMenu();
			}, 500);
		},
		toggleMenu() {
			let nav = document.querySelector(".navigation");
			let navbar = document.querySelector(".nav-button");

			if (nav.classList.contains("active")) {
				nav.classList.remove("active");
				navbar.classList.remove("active");
			} else {
				nav.classList.add("active");
				navbar.classList.add("active");
			}
		},
		checkRoute(value) {
			switch (value.path) {
				case "/":
					this.currentPage = "home";
					break;
				case "/menu":
					this.currentPage = "menu";
					break;
				case "/about":
					this.currentPage = "about";
					break;
				case "/findus":
					this.currentPage = "findus";
					break;

				default:
					this.currentPage = "";
					break;
			}
		},
		toggleLang() {
			this.$store.commit("toogleLanguage");
			setTimeout(() => {
				this.toggleMenu();
			}, 100);
		},
	},
	watch: {
		$route(value) {
			this.checkRoute(value);
		},
	},
	created() {
		this.checkRoute(this.$route);
	},
};
</script>

<style lang="scss" scoped>
@import "./../styles/navigation.scss";
</style>
