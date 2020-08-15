<template>
  <header>
    <nav>
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <ul>
        <nuxt-link class="page-link" v-for="link in links" :key="link.url" :to="link.url">{{link.name}}</nuxt-link>
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
          "name": "Angebot",
          "url": "/#angebot"
        },
        {
          "name": "Über uns",
          "url": "/#uerber-uns"
        },
        {
          "name": "Kontakt",
          "url": "/#kontakt"
        },
      ]
    }
  }
};
</script>

<style scoped>
header {
  background: url("../assets/banner.jpg") center 35% no-repeat;
  background-size: cover;
  height: calc(128px + 30vw);
  max-height: 768px;
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

nav {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  /* height: calc(38.4px + 3vw); */
  /* max-height: 96px; */
  height: 64px;
  background: rgba(228, 229, 221, 0.75);
  bottom: 0;
  backdrop-filter: blur(6px);
  padding: 0 4%;
  box-sizing: border-box;
  user-select: none;
}

a {
  text-decoration: none;  
}

ul {
  display: flex;
}

.page-link {
  color: var(--color-font--light);
  font-weight: 600;
  padding: 16px 24px;
  align-self: center;
  border-radius: 4px;;
}

.page-link:hover {
  color: var(--color-primary);
}
</style>
