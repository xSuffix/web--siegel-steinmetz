<template>
<v-container pa-0>
  <v-app-bar flat class="mt-md-16 mb-md-16">
    
      <v-app-bar-title><Logo /></v-app-bar-title>
      <v-spacer />
      <nav class="d-none d-md-flex">
        <a
          v-for="link in links"
          :key="link.slug"
          @click="$vuetify.goTo(link.slug)"
          >{{ link.title }}</a
        >
      </nav>
    
  </v-app-bar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      links: [],
    };
  },
  async fetch() {
    this.links = await this.$content("blocks")
      .only(["title", "slug", "nav"])
      .where({ nav: { $gt: 0 } })
      .sortBy("nav")
      .fetch();
  },
};
</script>

<style>
.v-toolbar {
  position: absolute;
  z-index: 8;
  top: calc(48vw - 56px);
  backdrop-filter: blur(4px);
  background-color: var(--color-navbar) !important;
  transition: none;
}

nav > a {
  color: var(--color-font);
  font-weight: 500;
  padding: 16px 24px;
  align-self: center;
  border-radius: 4px;
}

nav > a:hover {
  color: var(--color-primary);
}

@media (min-width: 960px) {
  .v-toolbar {
    position: relative;
    top: 0;
    background-color: var(--color-bgr1) !important;
  }
}
</style>