<template>
  <v-container pa-0 pb-4 py-md-8>
    <v-row no-gutter class="align-center">
      <v-col cols="12" md="6" order-md="2" class="mb-n3">
        <nuxt-img v-bind="image" class="banner" alt="Hero Image" />
      </v-col>
      <v-col cols="12" md="6" order-md="1" class="px-6 py-0">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    image: Object,
  },
};
</script>
