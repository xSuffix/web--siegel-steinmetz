<template>
  <div class="offer-card">
    <hr>    
    <div class="card-container">
      <img
        :src="image"
        :alt="title"
      >
      <div class="right">
        <div>
          <h3>{{ title }}</h3>
          <p>{{ text }}</p>
        </div>
        <div class="actions">
          <nuxt-link
            v-for="button in buttons"
            :key="button.url"
            :to="button.url"
          >
            <v-btn
              :text="button.type == 'text'"
              :color="button.color"
            >
              {{ button.text }}
            </v-btn>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardOffer",
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    buttons: {
      type: Array,
      default: () => {}
    },
    image: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
hr {
  margin: 32px 0;
  border-top: none;
  border-bottom: 1px solid;
  border-color: var(--v-secondary-base);
}

.offer-card {
  margin: 32px 0;
}

.card-container {
  display: flex;
  font-size: 14px;
}

.right {  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  flex: 0 0 32%;
  width: 32%;
  max-height: 230px;
  margin-right: 16px;
  border-radius: 4px;
  object-fit: cover;
}

h3 {
  margin: 0 0 8px 0;
}

p {
  margin: 8px 0;
  font-size: 1em;
}

.actions a + a {
  margin-left: 8px;
}

@media (min-width: 768px) {
  img {
    height: 192px;
    width: 256px;
    margin-right: 32px;
  }
}

@media (min-width: 992px) {
  img {
    width: 100%;
    margin: 0;
  }

  hr {
    display: none;
  }

  .card-container {
    flex-direction: column;
  }
}
</style>