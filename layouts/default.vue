<template>
  <v-app>
    <Header />
    <Nuxt />
    <BottomNavigation />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";

export default {
  components: {
    Header,
    BottomNavigation
  }
}
</script>

<style>
html {
  font-family: 'Roboto', Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

:root {
  --color-primary: #770019;
  --color-link: #1976D2;
  --color-font: #2C4251;
  --color-font-muted: #2C4251dd;
  --color-background: #f7f7f8;
  --color-background-panel: #fff;
  --color-navbar: rgba(228, 229, 221, 0.75);
}

/* .dark-mode {
  --color-font: #fff;
  --color-font-muted: #ffffffdd;
  --color-background: #202022;
  --color-background-panel: #282829;
  --color-navbar: #46464880;
} */

body {
  margin: 0;
  color: var(--color-font);
}

p {
  color: var(--color-font-muted)
}

.v-application a {
  color: var(--v-accent-base);
  text-decoration: none;
}

h1 {
  font-size: 2.25rem;
  font-weight: 400;
}

.container {
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}
</style>
