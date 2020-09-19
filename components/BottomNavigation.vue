<template>
  <div class="bottom-navigation-section">
    <v-bottom-navigation grow :value="selectedSection" color="primary" fixed>
      <v-btn @click="$vuetify.goTo('#home')">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn @click="$vuetify.goTo('#offer')">
        <span>Angebot</span>
        <v-icon>mdi-book-open-variant</v-icon>
      </v-btn>

      <v-btn @click="$vuetify.goTo('#about')">
        <span>Über uns</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn @click="$vuetify.goTo('#contact')">
        <span>Kontakt</span>
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import Router from "vue-router";

export default {
  computed: {
    selectedSection: function() {
      return this.$store.state.selectedSection;
    }
  },
};
</script>

<style scoped>
.bottom-navigation-section {
  height: 56px;
}

.v-bottom-navigation .v-btn {
  height: inherit;
}
</style>