<template>
  <component :is="`icon-${themes[theme]}`" @click="nextTheme()" />
</template>

<script>
import IconSystem from "@/assets/icons/system.svg?inline";
import IconLight from "@/assets/icons/light.svg?inline";
import IconDark from "@/assets/icons/dark.svg?inline";
import IconSepia from "@/assets/icons/sepia.svg?inline";

export default {
  name: "ThemePicker",
  data() {
    return {
      themes: ["system", "light", "dark", "sepia"],
      theme: 0,
    };
  },
  methods: {
    nextTheme() {
      if (this.theme + 2 > this.themes.length) {
        this.theme = 0;
      } else {
        this.theme++;
      }
      this.$colorMode.preference = this.themes[this.theme];
    },
  },
  components: {
    IconSystem,
    IconLight,
    IconDark,
    IconSepia,
  }
};
</script>

<style scoped>
svg {
  height: 28px;
}
</style>