<template>
  <v-footer v-bind="localAttrs" :padless="padless">
    <v-card flat tile width="100%" class="accent lighten-1 text-center">
      <v-card-text>
        <h3 class="white--text">Bernd Siegel Steingestaltung</h3>
      </v-card-text>
      <v-card-text>
        <v-btn class="mx-2" text small color="secondary">
          <v-icon left> mdi-information </v-icon>Impressum
        </v-btn>
        <v-btn class="mx-2" text small color="secondary">
          <v-icon left> mdi-shield-account </v-icon>Datenschutz
        </v-btn>
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text accent">
        Copyright © {{ new Date().getFullYear() }}
        <a
          href="http://www.happydesigns.de/"
          target="_blank"
          rel="noopener"
          class="white--text"
          >happydesigns</a
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-shield-account", "mdi-delete"],
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "default",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>