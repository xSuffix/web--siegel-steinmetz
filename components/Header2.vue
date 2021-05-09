<template>
  <header :class="{ scrolled: scrolled }">
    <nav class="container box">
      <a @click="$vuetify.goTo(0)">
        <Logo />
      </a>
      <ul>
        <a
          v-for="link in links"
          :key="link.url"
          class="page-link"
          @click="$vuetify.goTo(link.url)"
        >{{ link.label }}</a>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "SiegelHeaderDefault",
  
  components: {
    Logo,
  },
  data() {
    return {
      scrolled: false,
      links: [
        {
          label: "Angebot",
          url: "#offer",
        },
        {
          label: "Über uns",
          url: "#about",
        },
        {
          label: "Kontakt",
          url: "#contact",
        },
      ],
    };
  },
  mounted () {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 32;
    }
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
  transition: box-shadow 0.2s;
}

nav {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background: var(--color-navbar);
  top: calc(48vw - 48px);
  backdrop-filter: blur(4px);
  user-select: none;
  transition: margin 0.2s;
}

ul {
  display: none;
}

.page-link {
  color: var(--color-font);
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
  nav {
    height: 64px;
    top: calc(48vw - 64px);
  }
}

@media (min-width: 768px) {
  header {
    position: fixed;
  }

  .scrolled {
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.08), 0 1px 10px 0 rgba(0,0,0,0.10), 0 2px 4px -1px rgba(0,0,0,0.12);
    
  }

  .scrolled > nav {
    margin: 8px auto;
  }

  nav {
    position: unset;
    height: 64px;
    margin: 24px auto;
    background: transparent;
    backdrop-filter: none;
    width: calc(100% - 32px);
  }

  ul {
    display: flex;
  }
}
</style>
