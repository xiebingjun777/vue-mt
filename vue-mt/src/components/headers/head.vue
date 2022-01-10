<template>
  <header id="head_top">
    <slot name="logo"></slot>
    <slot name="search"></slot>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    console.log("mounted.");
  },
  props: ["signinup", "headTitle", "goBack"],
  //   computed(){
  //       ...mapState([
  //                 'userInfo'
  //             ]),
  //   },
  //   methods: {
  //             ...mapActions([
  //                 'getUserInfo'
  //             ]),
  //         },
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
#head_top {
  background-color: $orange;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  @include widthHeight(100%, 1.95rem);
}
</style>
