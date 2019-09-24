<template>
  <div class="about">
    <!-- <Carousel /> -->
    <progressive-background class="header-image" :src="require('./../assets/images/home_1.jpg')" :placeholder="require('./../assets/images/blurred/home_1.jpg')" />

    <div class="about-section">
      <div class="left-side with-text">
        <div class="title">{{displayLang.services.title}}</div>
        <div class="slogan">{{displayLang.services.slogan}}</div>
        <div class="line"></div>
        <div class="text">
          {{displayLang.services.text}}
          <br/><br/>
          {{displayLang.services.title2}}
          <div class="features">
            <div v-for="(star, index) in displayLang.services.items" :key="index" class="feature">
              <i class="far fa-star"></i>
              {{star}}
            </div>
          </div>
        </div>
      </div>
      <div class="right-side with-image">
        <progressive-background class="background" :src="require('./../assets/images/services.jpg')" :placeholder="require('./../assets/images/blurred/services.jpg')" />
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
	components: { Carousel, Contacts, Promos },
	computed: { ...mapGetters(["displayLang"]) },
};
</script>

<style lang="scss" scoped>
@import "@/styles/about.scss";
</style>

