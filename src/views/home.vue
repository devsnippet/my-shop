<style>
  .body {
    background: #fff;
  }
</style>

<template>

<h1>home</h1>
    <bottom-tab-bar></bottom-tab-bar>
</template>


<script>

  import bottomTabBar from '../components/bottomTabBar.vue';

  module.exports = {
    components:{
      'bottom-tab-bar':bottomTabBar
    },
  }
</script>
