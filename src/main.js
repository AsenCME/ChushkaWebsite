import Vue from "vue";
import VueProgressiveImage from "vue-progressive-image";
import * as VueGoogleMaps from "vue2-google-maps";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.use(VueProgressiveImage);

Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyAlu17PuCOggAb8q65PiJ2RhOkIwEzUxto",
		libraries: "places",
	},
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
