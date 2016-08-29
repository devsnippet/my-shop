<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './vuex/store';

  export default {
    store:store,
    components:{
    },
  };
</script>

<style>
  @import "../src/assets/style/main.css";
  @import '~vux/dist/vux.css';
</style>
