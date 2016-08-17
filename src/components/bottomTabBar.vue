
<template>
  <div>
    <tabbar>
      <tabbar-item v-link="{name: 'home'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
        <span slot="label">home</span>
      </tabbar-item>
      <tabbar-item v-link="{name: 'list'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
        <span slot="label">list</span>
      </tabbar-item>
      <tabbar-item v-link="{name: 'details'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
        <span slot="label">details</span>
      </tabbar-item>
      <tabbar-item v-link="{name: 'user'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
        <span slot="label">uesr</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import tabBar from 'vux/dist/components/tabbar';
  import tabBarItem from 'vux/dist/components/tabbar-item';

  module.exports = {
    components: {
      'tabbar': tabBar,
      'tabbar-item': tabBarItem
    }
  }
</script>

<style>
  @import '~vux/dist/vux.css';
  .v-link-active{
    color: red;
  }
</style>
