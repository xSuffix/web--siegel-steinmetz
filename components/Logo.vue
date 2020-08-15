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
  font-size: 25px;
  line-height: 34px;
  text-decoration: none;
}

@media screen and (max-width: 1920px) {
  span {
    font-size: calc(0.8vw + 10px);
    line-height: calc(1.2vw + 12px);
  }
}
</style>
