<template>
  <div class="bottom-navigation-section d-md-none">
    <v-bottom-navigation grow :value="selectedSection" color="main1" fixed>
      <v-btn v-for="link in links" :key="link.slug" @click="$vuetify.goTo(link.slug)">
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
    this.links = await this.$content("sections")
      .only(["title", "slug", "bottomNav", "icon"])
      .where({ bottomNav: { $gt: 0 } })
      .sortBy("bottomNav")
      .fetch();
    console.log(this.links);
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
</style>