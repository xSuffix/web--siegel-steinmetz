<template>
  <v-app class="p-8">
    <Header />
    <Nuxt />
    <NavigationBottom />
  </v-app>
</template>

<script>
export default {};
</script>

<style>
:root {
  --color-primary: #770019;
  --color-font-strong: #182229;
  --color-font: #2c4251;
  --color-font-muted: #2c4251dd;
  --color-link: #1976D2;
  --color-navbar: #e4e5ddbf;
  --color-bgr: #fff;
  --color-bgr2: #f7f7f8;
}

body {
  margin: 0;
}

#__layout .v-application {
  color: var(--color-font);
}

#__layout .v-application a {
  color: var(--color-link);
  text-decoration: none;
}

.v-application--wrap {
  overflow-x: hidden;
}

h1 {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 1.5rem 0 1rem 0;
  color: var(--color-font-strong)
}

h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 1.25rem 0 0.75rem 0;
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
  object-position: center bottom;
}

@media (min-width: 960px) {
  .banner {
    max-width: 512px;
    max-height: 256px;
    height: calc(8vw + 128px);
    border-radius: 4px;
    margin: 0 0 0 auto;
    display: block;
    object-position: center center;
  }
}

#services {
  background: var(--color-bgr2);
}

</style>