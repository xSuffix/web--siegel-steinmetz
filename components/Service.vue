<template>
  <v-container pa-0 pb-md-8>
    <v-divider v-if="divider == true" class="my-6" />
    <v-row>
      <v-col>
        <div style="font-size: 0.9375rem">
          <nuxt-img
            v-bind="image"
            class="rounded"
            style="max-width: 29vw; float: left; margin: 0 1rem 1rem 0"
          />
          <slot />
        </div>
        <div>
          <v-btn v-for="button in buttons" :key="button.title" v-bind="button">
            {{ button.title }}
          </v-btn>
        </div>
      </v-col>
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

<style scoped>
button {
  /* text-transform: initial; */
}

button + button {
  margin-left: 8px;
}
</style>
