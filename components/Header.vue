<template>
  <header >
    <nav class="container">
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
  width: 100%;
  background: #fff;
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
  padding: 0 16px;
  box-sizing: border-box;
  user-select: none;
}

ul {
  display: none;
}

.page-link {
  color: var(--color-font--light);
  font-weight: 500;
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
header {
  position: fixed;
}

  nav {
    position: initial;
    height: 64px;
    margin: 24px auto;
    box-sizing: content-box;
    background: transparent;
    backdrop-filter: none;
    width: calc(100% - 32px);
  }

  ul {
    display: flex;
  }  
}
</style>
