<template>
  <v-container pa-0>
    <v-app-bar flat dense class="mt-md-16 mb-md-16">
      <v-app-bar-title><Logo /></v-app-bar-title>
      <v-spacer />
      <nav class="d-none d-md-flex">
        <a
          class="font--text font-weight-medium mx-4 pa-2"
          v-for="doc in docs"
          :key="doc.slug"
          @click="$vuetify.goTo(doc.link)"
          >{{ doc.title }}</a
        >
      </nav>
    </v-app-bar>
  </v-container>
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
.header {
  height: 48px !important;
}

.v-toolbar {
  position: absolute;
  z-index: 8;
  top: calc(48vw - 48px);
  backdrop-filter: blur(4px);
  background-color: var(--color-navbar) !important;
  transition: none;
}

a:hover {
  color: var(--color-primary) !important;
}

.v-toolbar > div {
  height: 56px !important;
  background-color: red !important;
}

@media (min-width: 600px) {
  .v-toolbar {
    height: 56px !important;
    top: calc(48vw - 56px);
  }
}

@media (min-width: 960px) {
  .v-toolbar {
    position: relative;
    top: 0;
    background-color: var(--color-bgr1) !important;
  }
}
</style>

<style>
.v-toolbar__content {
  height: 100% !important;
}
</style>