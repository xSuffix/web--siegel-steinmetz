<template>
  <div class="welcome container">
    <div class="leading">
      <h1>Herzlich Willkommen!</h1>
      <p>
        Wir bieten einen umfassenden Service rund um den Naturstoff Stein:<br />Die
        Pflege und Restauration von Gebäuden, Sandsteinfassaden, Fenstern,
        Treppen, Geländern, Ornamentent, Denkmälern und Grabsteinen.
      </p>
    </div>
    <div class="hero-image" v-if="$route.name == 'index'" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
}

.leading {
  order: 2;
  line-height: 1.625;
  /* padding: 0 16px; */
}

.hero-image {
  background: url("../assets/banner.jpg") center 35% no-repeat;
  background-size: cover;
  height: 50vw;
  width: 100%;
}

@media (max-width: 599px) {
  .welcome {
    padding: 0;
  }

  .leading {
    padding: 0 16px;
  }
}

@media (min-width: 600px) {
  .hero-image {
    order: 1;
    height: 256px;
    border-radius: 4px;
  }

  .welcome {
    justify-content: space-between;
    padding-top: 96px;
    padding-bottom: 96px;
    flex-direction: row-reverse;
  }

  .welcome > * {
    max-width: 42%;    
  }
}
</style>
