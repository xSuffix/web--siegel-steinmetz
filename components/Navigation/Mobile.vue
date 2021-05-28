<template>
  <div class="bottom-navigation-section d-md-none">
    <v-bottom-navigation grow :value="selectedSection" color="primary" fixed>
      <v-btn v-for="doc in docs" :key="doc.slug" @click="$vuetify.goTo(doc.link)" text>
        <span>{{ doc.title }}</span>
        <v-icon>{{ doc.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
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
      .only(["title", "slug", "link", "bottomNav", "icon"])
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