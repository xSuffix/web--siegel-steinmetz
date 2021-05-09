<template>
  <v-img :lazy-src="lazyImgSrc" :src="imgSrc" v-bind="this.$attrs" />
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