
<style>
  .body {
    background: #fff;
  }
</style>

<template>

  <h1>list</h1>


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
