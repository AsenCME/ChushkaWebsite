import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Menu from "./views/Menu.vue";
import About from "./views/About.vue";
import FindUs from "./views/FindUs.vue";
import Services from "./views/Services.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/about",
			name: "about",
			component: About,
		},
		{
			path: "/menu",
			name: "menu",
			component: Menu,
		},
		{
			path: "/findus",
			name: "findus",
			component: FindUs,
		},
		{
			path: "/services",
			name: "services",
			component: Services,
		},
	],
});

// XXX: Detach from app on small screen to remove Chrome's address bar and enable better scrolling
