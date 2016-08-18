
<template>
  <div>
    <tabbar>
      <tabbar-item v-link="{name: 'home',activeClass:'weui_bar_item_on'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
        <span slot="label">home</span>
      </tabbar-item>
      <tabbar-item v-link="{name: 'list',activeClass:'weui_bar_item_on'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
        <span slot="label">list</span>
      </tabbar-item>
      <tabbar-item v-link="{name: 'details',activeClass:'weui_bar_item_on'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
        <span slot="label">details</span>
      </tabbar-item>
      <tabbar-item v-link="{name: 'user',activeClass:'weui_bar_item_on'}"  v-bind:class="{'class-a':select}">
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
    data: {
      select:true
    },
    components: {
      'tabbar': tabBar,
      'tabbar-item': tabBarItem
    }
  }
</script>

<style>
  @import '~vux/dist/vux.css';
  .class-a{
    color: red;
  }
  .class-b{
    color: #00f;
  }
</style>
