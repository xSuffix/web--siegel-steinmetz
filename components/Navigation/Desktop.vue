<template>
  <nav class="d-none d-md-flex">
    <a      
      v-for="doc in docs"
      :key="doc.slug"
      @click="$vuetify.goTo(doc.link)"
      class="font--text font-weight-medium mx-4 pa-2"
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
      .only(["title", "slug", "link", "orderDesktopNav"])
      .where({ orderDesktopNav: { $gt: 0 } })
      .sortBy("orderDesktopNav")
      .fetch();
  },
};
</script>

<style scoped>
a:hover {
  color: var(--color-primary) !important;
}
</style>
