<template>
  <main>
    <Home
      v-observe-visibility="{
            callback: (isVisible, entry) => visibilityChanged(isVisible, entry, 0),
            intersection: {
              root: this.$refs.home,
              rootMargin: '-128px'
            }
          }"
    />
    <Offer v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, 1)" />
    <Footer />
  </main>
</template>

<script>
import Home from "@/sections/Home.vue";
import Offer from "@/sections/Offer.vue";

import Footer from "@/components/Footer.vue";

export default {
  methods: {
    visibilityChanged(isVisible, entry, element) {
      if (isVisible) {
        this.visibleElements.push(element);
      } else {
        let index = this.visibleElements.indexOf(element);
        if (index >= 0) {
          this.visibleElements.splice(index, 1);
        }
      }
      this.$store.commit("setSection", Math.min(...this.visibleElements));
    },
  },
  data() {
    return {
      visibleElements: [],
    };
  },
  components: {
    Home,
    Offer,
    Footer
  },
};
</script>

<style scoped>
main {
  background: var(--color-background);
}

@media (min-width: 768px) {
  main {
    padding-top: 112px;
  }
}
</style>
