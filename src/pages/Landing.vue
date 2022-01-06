<template>
  <div>
    <landing-header></landing-header>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import LandingHeader from "../components/LandingHeader";
import LandingFooter from "../components/LandingFooter";
export default {
  name: "Landing",
  components: {LandingFooter, LandingHeader},
};
</script>

<style scoped>

</style>