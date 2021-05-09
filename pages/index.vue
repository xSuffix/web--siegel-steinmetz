<template>
  <main>
    <nuxt-content :document="doc" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content("index").fetch();
    return { doc };
  }
}
</script>

<style>

</style>