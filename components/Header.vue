<template>
  <header>
    <div class="welcome">
      <div class="welcome-text">
        <h1>Herzlich Willkommen!</h1>
        <p>Wir bieten einen umfassenden Service rund um den Naturstoff Stein:<br>Die Pflege und Restauration von Gebäuden, Sandsteinfassaden, Fenstern, Treppen, Geländern, Ornamentent, Denkmälern und Grabsteinen.</p>
      </div>
      <div class="hero-image" v-if="$route.name == 'index'" />
    </div>
    <nav>
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <ul>
        <nuxt-link
          class="page-link"
          v-for="link in links"
          :key="link.url"
          :to="link.url"
          >{{ link.name }}</nuxt-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "SiegelHeaderDefault",
  components: {
    Logo
  },
  data() {
    return {
      links: [
        {
          name: "Angebot",
          url: "/#angebot"
        },
        {
          name: "Über uns",
          url: "/#uerber-uns"
        },
        {
          name: "Kontakt",
          url: "/#kontakt"
        }
      ]
    };
  }
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1248px;
  margin: 0 auto;
}

.hero-image {
  background: url("../assets/banner.jpg") center 35% no-repeat;
  background-size: cover;
  height: 50vw;
  width: 100%;
  order: 2;
}

.welcome {
  display: flex;
  flex-direction: column;
  order: 1;
}

.welcome-text {
  order: 3;
}

nav {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 48px;
  background: rgba(228, 229, 221, 0.75);
  top: calc(50vw - 48px);
  backdrop-filter: blur(6px);
  padding: 0 4%;
  box-sizing: border-box;
  user-select: none;
}

ul {
  display: none;
}

.page-link {
  color: var(--color-font--light);
  font-weight: 600;
  padding: 16px 24px;
  align-self: center;
  border-radius: 4px;
}

.page-link:hover {
  color: var(--color-primary);
}

a {
  text-decoration: none;
}

@media (min-width: 600px) {
  nav {
    position: initial;
    height: 64px;
    padding: 24px 0;
    box-sizing: content-box;
    background: transparent;
    backdrop-filter: none;
  }

  ul {
    display: flex;
  }

  .hero-image {
    order: 1;
    height: 256px;
    border-radius: 4px;
  }

  .welcome {
    justify-content: space-between;
    padding: 96px 0;
    flex-direction: row-reverse;
    order: 3;
  }

  .welcome > * {
    width: 42%;    
  }
}
</style>
