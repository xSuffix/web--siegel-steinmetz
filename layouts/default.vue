<template>
  <div :class="$route.name">
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
  font-family: Roboto, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  --color-primary: #770019;
  --color-font--light: #363537;
}

body {
  margin: 0;
  color: var(--color-font--light);
}

</style>
