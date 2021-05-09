<template>
  <section id="home" ref="home">
    <div class="white">
      <div class="container pv-lg-d">
        <div class="box">
          <nuxt-content :document="doc"></nuxt-content>
        </div>
        <div v-if="$route.name == 'index'" class="hero-image" />
      </div>
    </div>
    <Wave color="var(--v-white-base)" background="var(--v-gray-base)" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content("index").fetch();
    return { doc };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.box {
  order: 2;
  line-height: 1.625;
}

.hero-image {
  background: url("../../assets/img/banner.webp") center 35% no-repeat;
  background-size: cover;
  height: 48vw;
  width: 100%;
  background-position-y: 100%;
}

@media (min-width: 768px) {
  h1 {
    margin-top: 0;
  }

  .container {
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  .box {
    margin-right: 16px;
    max-width: 576px;
    flex: 1 1;
  }

  .hero-image {
    margin-left: 16px;
    order: 1;
    height: 256px;
    max-width: 512px;
    border-radius: 4px;
    background-position-x: 33.34%;
    flex: 1 1;
  }
}
</style>