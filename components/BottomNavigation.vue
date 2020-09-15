<template>
<div class="bottom-navigation-section">
  <v-bottom-navigation
    grow
    :value="value"
    color="primary"
  >
    
    <v-btn @click.native="jump('home')">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    

    <v-btn @click.native="jump('offer')">
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

  </div>
</template>

<script>
export default {
  data: () => ({ value: 0 }),
  methods: {
    jump(hash) {
      this.$router.push({
        hash: hash
      })
    }
  }
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