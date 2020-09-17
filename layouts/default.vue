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
    BottomNavigation,
  },
};
</script>

<style>
:root {
  --color-primary: #770019;
  --color-link: #1976d2;
  --color-font: #2c4251;
  --color-font-muted: #2c4251dd;
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

.theme--light.v-application {
  color: var(--v-coal-darken1);
}

body {
  margin: 0;
  color: var(--color-font);
}

p {
  /* color: var(--color-font-muted) */
}

a {
  text-decoration: none;
}

h1 {
  font-size: 2.25rem;
  font-weight: 400;
}

h1 {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 1.5rem 0 1rem 0;
}

h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1.25rem 0 1rem 0;
}

.container {
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 16px;
}

.panel {
  background: #d9d9da33;
  background: var(--color-background-panel);
}

@media (min-width: 600px) {
  p {
    font-size: 1.125rem;
  }
}

@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}
</style>
