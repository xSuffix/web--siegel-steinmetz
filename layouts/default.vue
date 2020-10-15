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
  --color-navbar: rgba(228, 229, 221, 0.75);
}

.theme--light.v-application {
  color: var(--v-accent-darken1);
}

body {
  margin: 0;
  color: var(--color-font);
}

a {
  text-decoration: none;
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

.content {
  max-width: 1248px;
  margin: 0 auto;
  padding: 0;
  
}

.container {
  padding: 0px 16px;
  margin: 0;
  display: inline-block;
}

@media (min-width: 600px) {
  p {
    font-size: 1.125rem;
  }
}

@media (max-width: 1280px) {
  .content {
    max-width: 1024px;
  }
}
</style>
