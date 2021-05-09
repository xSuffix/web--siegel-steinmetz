<template>
  <v-img
    position="center 100%"
    :lazy-src="lazyImgSrc"
    :src="imgSrc"
    v-bind="this.$attrs"
  />
</template>

<script>
export default {
  props: {
    src: String,
    lazySrc: String,
  },
  computed: {
    imgSrc: function () {
      try {
        return require(`@/content/images/${this.src}`);
      } catch {
        return "";
      }
    },
    lazyImgSrc: function () {
      try {
        return require(`@/content/images/${this.lazySrc}`);
      } catch {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.v-image {
  height: 48vw;
  padding: -12px;
}

@media (min-width: 960px) {
  .v-image {
    max-width: 512px;
    max-height: 256px;
    height: calc(8vw + 128px);
    width: 100%;
    border-radius: 4px;
    margin: 0 0 0 auto;
  }
}
</style>