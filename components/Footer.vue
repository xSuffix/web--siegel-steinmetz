<template>
  <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="coal lighten-1 text-center"
      >
        <v-card-text>
          <v-btn class="mx-2" tile outlined small color="secondary">
      <v-icon left>mdi-information</v-icon> Impressum
    </v-btn>
          <v-btn class="mx-2" tile outlined small color="secondary">
      <v-icon left>mdi-shield-account</v-icon> Datenschutz
    </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text coal">
          Copyright © {{ new Date().getFullYear() }} <a href="http://www.happydesigns.de/" target="_blank" rel="noopener">happydesigns</a>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-shield-account',
        'mdi-delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: true,
      variant: 'default',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>

<style scoped>
footer a {
  color: #fff;
}

footer a:hover {
  text-decoration: underline;
}
</style>