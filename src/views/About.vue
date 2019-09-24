<template>
  <div class="about" ref="about">
    <!-- <Carousel /> -->
    <progressive-background class="header-image" :src="require('./../assets/images/home_1.jpg')" :placeholder="require('./../assets/images/blurred/home_1.jpg')" />

    <div class="about-section" id="first" ref="first">
      <div class="left-side with-image">
        <progressive-background class="background" :src="require('./../assets/images/about_1.jpg')" :placeholder="require('./../assets/images/blurred/about_1.jpg')" />
      </div>
      <div class="right-side with-text">
        <div class="title">{{displayLang.about.title1}}</div>
        <div class="slogan">{{displayLang.about.slogan1}}</div>
        <div class="line"></div>
        <div class="text">
          <div class="features">
            <div v-for="(star, index) in displayLang.about.stars" :key="index" class="feature">
              <i class="far fa-star"></i>
              {{star}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-section" id="second" ref="second">
      <div class="left-side with-text" style="background-color: #313539">
        <div class="title">{{displayLang.about.title2}}</div>
        <div class="slogan">{{displayLang.about.slogan2}}</div>
        <div class="line"></div>
        <div class="text">
          <p>{{displayLang.about.text3}}</p>
        </div>
      </div>
      <div class="right-side with-image">
        <progressive-background class="background" :src="require('./../assets/images/about_2.jpg')" :placeholder="require('./../assets/images/blurred/about_2.jpg')" />
      </div>
    </div>

    <div class="about-section" id="third">
      <div class="left-side with-image">
        <progressive-background class="background" :src="require('./../assets/images/about_3.jpg')" :placeholder="require('./../assets/images/blurred/about_3.jpg')" />
      </div>
      <div class="right-side with-text">
        <div class="title">{{displayLang.about.title3}}</div>
        <div class="slogan">{{displayLang.about.slogan3}}</div>
        <div class="line"></div>
        <div class="text">
          <p>{{displayLang.about.text4}}</p>
          <p>{{displayLang.about.text5}}</p>
        </div>
      </div>
    </div>

    <Contacts />

    <!-- <Modal :text="modalOfferText" :isOpen="modalOpen" @closeModal="closeModal()" /> -->
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Contacts from "@/components/Contacts.vue";
import Promos from "@/components/Promos.vue";
import Modal from "@/components/Modal.vue";

import { mapGetters } from "vuex";

export default {
	components: { Carousel, Contacts, Promos, Modal },
	computed: { ...mapGetters(["displayLang"]) },
	methods: {
		openModal(text) {
			this.modalOfferText = text;
			this.modalOpen = true;
		},
		closeModal() {
			this.modalOfferText = "";
			this.modalOpen = false;
		},
	},
	data() {
		return {
			modalOfferText: "Dicks",
			modalOpen: false,
		};
	},
	mounted() {
		let hash = this.$route.hash.substr(1);
		if (hash) this.$refs[hash].scrollIntoView();
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/about.scss";
</style>

