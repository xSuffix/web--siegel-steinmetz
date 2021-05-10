<template>
  <v-app class="p-8">
    <Header />
    <Nuxt />
    <BottomNavigation />
  </v-app>
</template>

<script>
export default {};
</script>

<style>
:root {
  --color-font: #2c4251;
  --color-font-muted: #2c4251dd;
  --color-navbar: #e4e5ddbf;
}

.v-application--wrap {
  overflow-x: hidden;
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

@media (min-width: 600px) {
  p {
    font-size: 1.125rem;
  }
}

.banner {
  height: 48vw;
  width: 100%;
  object-fit: cover;
}

@media (min-width: 960px) {
  .banner {
    max-width: 512px;
    max-height: 256px;
    height: calc(8vw + 128px);
    width: 100%;
    border-radius: 4px;
    margin: 0 0 0 auto;
    display: block;
  }
}

</style>