<template>
  <main>
    <div class="shadow">
      <div class="welcome container">
        <div class="leading">
          <h1>Herzlich Willkommen!</h1>
          <p>
            Wir bieten einen umfassenden Service rund um den Naturstoff
            Stein:<br />Die Pflege und Restauration von Gebäuden,
            Sandsteinfassaden, Fenstern, Treppen, Geländern, Ornamentent,
            Denkmälern und Grabsteinen.
          </p>
        </div>
        <div class="hero-image" v-if="$route.name == 'index'" />
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
 background: #d9d9da34
}

.shadow {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.11);
  background: #fff;
}

.welcome {
  display: flex;
  flex-direction: column;
  
}

.leading {
  order: 2;
  line-height: 1.625;
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
  main {
    padding-top: 112px;
  }

  .hero-image {
    order: 1;
    height: 256px;
    border-radius: 4px;
    max-width: 42%;
  }

  .welcome {
    justify-content: space-between;
    padding-top: 96px;
    padding-bottom: 96px;
    flex-direction: row-reverse;
  }

  .leading {
    width: 50%;
  }

  h1 {
    margin-top: 0;
  }

  p {
    font-size: 1.125rem;
  }
}
</style>
