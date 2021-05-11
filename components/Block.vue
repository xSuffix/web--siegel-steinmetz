<template>
  <section :id="content">
    <nuxt-content :document="doc" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      doc: {}
    }
  },
  props: {
    content: {
      type: String,
      required: true
    }
  },
  async fetch() {
    this.doc = await this.$content("blocks", this.content).fetch();
  }
};
</script>
