<template>
  <div>
      <head-top signin-up='home'>
          <span slot='logo' class="head-logo " @click="reload">mtuan</span>
      </head-top>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      reload(){
          window.location.reload()
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
