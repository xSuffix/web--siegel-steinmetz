<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
}
</script>

<style>
html {
  font-family: 'Roboto', Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  --color-primary: #770019;
  --color-font--light: #2C4251;
}

body {
  margin: 0;
  color: var(--color-font--light);
}

.container {
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 16px;
}

h1 {
  font-size: 2.25rem;
  font-weight: 400;
}

@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}
</style>
