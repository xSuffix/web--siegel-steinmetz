<template>
  <div class="bottom-navigation-section d-md-none">
    <v-bottom-navigation grow :value="selectedSection" color="main1" fixed>
      <v-btn v-for="link in links" :key="link.slug" @click="$vuetify.goTo(link.slug)" text>
        <span>{{ link.title }}</span>
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
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
      .only(["title", "slug", "bottomNav", "icon"])
      .where({ bottomNav: { $gt: 0 } })
      .sortBy("bottomNav")
      .fetch();
  },
  computed: {
    selectedSection: function () {
      return this.$store.state.selectedSection;
    },
  },
};
</script>

<style scoped>
/* Because bottom-navigation is fixed and would overlap the page */
.bottom-navigation-section {
  height: 56px;
}

/* Override Vuetify styles because CSS has wrong order in production */
#app .v-btn {
  height: inherit;
}
</style>