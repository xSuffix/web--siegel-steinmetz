<template>
  <v-bottom-navigation
    grow
    :value="value"
    color="primary"
  >
    <v-btn>
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Angebot</span>
      <v-icon>mdi-book-open-variant</v-icon>
    </v-btn>

    <v-btn>
      <span>Über uns</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn>
      <span>Kontakt</span>
      <v-icon>mdi-phone</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 0 })
}
</script>

<style scoped>
.v-bottom-navigation {
  position: fixed;
}
</style>