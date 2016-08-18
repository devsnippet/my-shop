<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './vuex/store';
  import bottomTabBar from './components/bottomTabBar.vue';

  export default {
    store:store,
    components:{
      'bottom-tab-bar':bottomTabBar
    },
  };
</script>

<style>
</style>
