<template>
  <nav class="d-none d-md-flex">
    <a
      class="font--text font-weight-medium mx-4 pa-2"
      v-for="doc in docs"
      :key="doc.slug"
      @click="$vuetify.goTo(doc.link)"
      >{{ doc.title }}</a
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      docs: [],
    };
  },
  async fetch() {
    this.docs = await this.$content({ deep: true })
      .only(["title", "slug", "link", "nav"])
      .where({ nav: { $gt: 0 } })
      .sortBy("nav")
      .fetch();
  },
};
</script>

<style scoped>
a:hover {
  color: var(--color-primary) !important;
}
</style>
