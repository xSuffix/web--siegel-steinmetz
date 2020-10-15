<template>
  <section
    id="home"
    ref="home"
  >
    <div class="white">
      <div class="content">
        <div class="container">
          <h1>Herzlich Willkommen!</h1>
          <p>
            Wir bieten einen umfassenden Service rund um den Naturstoff Stein:
            <br>Die Pflege und Restauration von Gebäuden, Sandsteinfassaden,
            Fenstern, Treppen, Geländern, Ornamentent, Denkmälern und
            Grabsteinen.
            <br>
            <br>
            <b>
              Zum Grabmalkatalog:
              <a
                href="https://www.graef-granit.de/content/produkte"
                target="_blank"
                rel="noopener"
              >Gräf GmbH</a>
            </b>
          </p>
        </div>
        <div
          v-if="$route.name == 'index'"
          class="hero-image"
        />
      </div>
    </div>
    <Wave color="var(--v-white-base)" />
  </section>
</template>

<script>
import Wave from "@/components/Wave.vue";

export default {
  name: "Home",
  components: {
    Wave,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}

.container {
  order: 2;
  line-height: 1.625;
}

.hero-image {
  background: url("../assets/banner.webp") center 35% no-repeat;
  background-size: cover;
  height: 48vw;
  width: 100%;
  background-position-y: 100%;
}

@media (min-width: 768px) {
  h1 {
    margin-top: 0;
  }

  .content {
    justify-content: space-between;
    padding-top: 96px;
    padding-bottom: 96px;
    flex-direction: row-reverse;
  }

  .container {
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