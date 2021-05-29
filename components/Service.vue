<template>
  <v-container pb-md-8>
    <v-row>
      <v-col cols="4">
        <nuxt-img v-bind="img" style="width: 100%"></nuxt-img>
      </v-col>
      <v-col
        :class="{
          'd-flex': true,
          'flex-column': true,
          'justify-space-between': true,
        }"
        ><div>
          <slot />
        </div>
        <v-btn>Galerie</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    img: Object,
  },
};
</script>

<style>
</style>