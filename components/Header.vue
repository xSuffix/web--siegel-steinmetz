<template>
  <v-container pa-0>
    <v-app-bar flat dense class="my-md-12">
      <v-app-bar-title><Logo /></v-app-bar-title>
      <v-spacer />
      <NavigationDesktop />
    </v-app-bar>
  </v-container>
</template>

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
