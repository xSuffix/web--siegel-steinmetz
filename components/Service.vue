<template>
  <v-container pa-0 pb-md-8>
    <v-divider v-if="divider == true" class="my-6" />
    <v-row>
      <v-col>
        <nuxt-img
          v-bind="image"
          class="rounded"
          style="max-width: 29vw; float: left; margin: 0 1rem 1rem 0"
        />
        <div style="font-size: 15px">
          <slot />
        </div>
        <v-btn v-for="button in buttons" :key="button.title" v-bind="button">
          {{ button.title }}
        </v-btn>
      </v-col>
      <!-- <v-col class="d-flex flex-column justify-space-between">
        <div>
          <slot />
        </div>
        <v-btn v-for="button in buttons" :key="button.title" v-bind="button">
          {{ button.title }}
        </v-btn>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    image: Object,
    buttons: Array,
    divider: Boolean,
  },
};
</script>

<style>
</style>
