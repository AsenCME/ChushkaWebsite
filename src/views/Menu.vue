<template>
  <div class="menu-page">
    <!-- <Carousel :imagesProp="images" higher="yes" /> -->
    <progressive-background class="header-image" :src="require('./../assets/images/menu_1.jpg')" :placeholder="require('./../assets/images/blurred/menu_1.jpg')" />

    <div class="menu-section" v-for="(category, index) of displayLang.menu" :key="index">
      <div class="left-side" :style="{'backgroundColor': category.color}">
        <div class="title">{{category.name}}</div>
        <div class="line"></div>
        <div class="menu-items">
          <div class="item" v-for="(item, index) of category.items" :key="index">
            <div class="name">
              {{item.name}}
              <span class="price">
                {{item.price}}
                <span v-if="item.price">{{displayLang.currency}}</span>
              </span>
            </div>
            <div v-if="item.ingredients" class="ingredients">
              {{item.ingredients}}
            </div>
            <div v-if="item.qty" class="qty">
              -- {{item.qty}}
            </div>
          </div>
        </div>
      </div>
      <div class="right-side" @click="goto(category.promo.gotoSection)">
        <div class="promo" :style="{'backgroundColor': category.promo.color}">
          <div class="name">{{category.promo.name}}</div>
          <div class="desc">{{category.promo.desc}}</div>
        </div>
        <progressive-background class="image" :src="require(`./../assets/images/${category.image}`)" :placeholder="require(`./../assets/images/blurred/${category.image}`)" />
      </div>
    </div>

    <!-- XXX: Offers -->
    <div class="offers">
      <div class="offer" style="background-color: #24292D">
        <div class="top" id="offer1"></div>
        <div class="text">
          <span>{{displayLang.about.offers.offerName}} #1</span>
          {{displayLang.about.offers.offer2}}
        </div>
      </div>

      <div class="offer" style="background-color: #2B3136">
        <div class="top" id="offer2"></div>
        <div class="text">
          <span>{{displayLang.about.offers.lunchMenu}}</span>
          {{displayLang.about.offers.offer1}}
        </div>
      </div>

      <div class="offer" style="background-color: #24292D">
        <div class="top" id="offer3"></div>
        <div class="text">
          <span>{{displayLang.about.offers.offerName}} #2</span>
          {{displayLang.about.offers.offer3}}
        </div>
      </div>
    </div>

    <div class="fixed-section">
      <div class="title">{{displayLang.fs3}}</div>
      <div class="line"></div>
      <div class="text">
        {{displayLang.fixedStatement3}}
        <span>.</span>
      </div>
    </div>

    <div class="drinks-section">
      <div class="left-side">
        <div class="desc">
          <progressive-background class="background" :src="require('./../assets/images/menu_6.jpg')" :placeholder="require('./../assets/images/blurred/menu_6.jpg')" />
        </div>
        <div class="drink-items">
          {{displayLang.menuEnd}}
        </div>
      </div>
      <div class="right-side">
        <progressive-background class="background" :src="require('./../assets/images/menu_5.jpg')" :placeholder="require('./../assets/images/blurred/menu_5.jpg')" />
      </div>
    </div>

  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Promos from "@/components/Promos.vue";

import { mapGetters } from "vuex";

export default {
  components: { Carousel, Promos },
  computed: {
    ...mapGetters(["displayLang"])
  },
  methods: {
    goto(section) {
      if (!section) return;
      if (section === "brochure") {
        window.location.href = "https://chushka.eu/menu.pdf";
      } else this.$router.push(`/about#${section}`);
    }
  },
  data() {
    return {
      // Apperantly for carousel... ok...
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
        "https://images.theconversation.com/files/180401/original/file-20170731-22175-67v3q2.jpg",
        "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/5b/gd/p05bgdd2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
        "https://images.theconversation.com/files/180401/original/file-20170731-22175-67v3q2.jpg",
        "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/5b/gd/p05bgdd2.jpg"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>
