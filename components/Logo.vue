<!--The 'Bernd Siegel Steingestaltung' Claim-->
<template>
  <div class="logo">
    <img src="../assets/favicon.svg" height="80%" />
    <div class="logo-claim">
      <div class="claim-top">
        <span>Bernd</span>
        <span style="color: var(--color-primary)">Siegel</span>
      </div>
      <span>Steingestaltung</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped>
.logo {
  height: 100%;
  display: flex;
  align-items: center;
}

.claim-top {
  display: flex;
  justify-content: space-between;
}

span {
  font-weight: 400;
  color: var(--color-font--light);
  text-decoration: none;
}

@media (min-width: 600px) {
  span {
    font-size: 20px;
    line-height: 25px;
  }
}
</style>
