
<style>
  .body {
    background: #fff;
  }
</style>

<template>

  <h1>details</h1>

<bottom-tab-bar></bottom-tab-bar>
</template>


<script>

  import { getName ,getCount} from '../vuex/getters';
  import { incrementCounter ,fetchname} from '../vuex/actions';
  import bottomTabBar from '../components/bottomTabBar.vue';

  module.exports = {
    components:{
      'bottom-tab-bar':bottomTabBar
    },
  }
</script>
