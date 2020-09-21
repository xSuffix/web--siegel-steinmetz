<template>
  <section>
    <div class="panel">
      <div class="container" id="home" ref="home">
        <div class="leading">
          <h1>Herzlich Willkommen!</h1>
          <p>
            Wir bieten einen umfassenden Service rund um den Naturstoff Stein:
            <br />Die Pflege und Restauration von Gebäuden, Sandsteinfassaden,
            Fenstern, Treppen, Geländern, Ornamentent, Denkmälern und
            Grabsteinen.
            <br />
            <br />
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
        <div class="hero-image" v-if="$route.name == 'index'" />
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 720 32"
      style="display: block;"
    >
      <path
        fill="var(--color-background-panel)"
        d="M0 25.576c89.5 6.3147 201.941 10.18 338.75.8675 220.639-15.0187 381.25 0 381.25 0V0H0v25.576z"
      />
    </svg>
  </section>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
}

.leading {
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

@media (max-width: 767.98px) {
  #home {
    padding: 0;
  }

  .leading {
    padding: 0 16px;
  }
}

@media (min-width: 768px) {
  h1 {
    margin-top: 0;
  }

  #home {
    justify-content: space-between;
    padding-top: 96px;
    padding-bottom: 96px;
    flex-direction: row-reverse;
  }

  .leading {
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