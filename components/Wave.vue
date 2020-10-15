<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 720 32"
    style="display: block"
  >
    <path
      :fill="color"
      d="M0 25.576c89.5 6.3147 201.941 10.18 338.75.8675 220.639-15.0187 381.25 0 381.25 0V0H0v25.576z"
    />
  </svg>
</template>

<script>
export default {
  name: "Wave",
  props: {
    color: {
      type: String,
      default: "black"
    }
  }
};
</script>

<style scoped>

</style>