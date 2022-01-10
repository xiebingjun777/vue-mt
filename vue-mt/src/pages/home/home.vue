<template>
  <div>
    <head-top signin-up="home">
      <span slot="logo" class="head-logo" @click="reload">mtuan</span>
    </head-top>
  </div>
</template>

<script>
import headTop from "../../components/headers/head.vue";
export default {
  name: "home",
  components: { headTop },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    reload() {
      window.location.reload();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../style/mixin.scss";
.head-logo {
  left: 0.4rem;
  font-weight: 400;
  @include sc(0.7rem, #000);
  @include widthHeight(2.3rem, 0.7rem);
}
</style>
