<template>
<div class="bottom-navigation-section">
  <v-bottom-navigation
    grow
    :value="value"
    color="primary"
  >
    
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
import Router from 'vue-router'

export default {
  data: () => ({ value: 0 }),
}

</script>

<style scoped>
.bottom-navigation-section {
  height: 56px;
}

.v-bottom-navigation {
  position: fixed;
}

.v-bottom-navigation .v-btn {
  height: inherit;
}
</style>