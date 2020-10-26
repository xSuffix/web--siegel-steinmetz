<template>
  <main>
    <Home
      v-observe-visibility="{
        callback: (isVisible, entry) => visibilityChanged(isVisible, entry, 0),
        intersection: {
          root: this.$refs.home,
          rootMargin: '-128px',
        },
      }"
    />
    <Offer
      v-observe-visibility="
        (isVisible, entry) => visibilityChanged(isVisible, entry, 1)
      "
    />
    <About />
    <Footer />
  </main>
</template>

<script>
import gql from "graphql-tag";
import textsQuery from "@/apollo/queries/text/texts.gql";

export default {
  async asyncData({ app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: textsQuery,
    });
    return {
      texts: data.texts,
    };
  },
  data() {
    return {
      visibleElements: [],
    };
  },
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
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  main {
    padding-top: 112px;
  }
}
</style>
