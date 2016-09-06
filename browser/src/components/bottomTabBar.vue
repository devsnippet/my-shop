<template>

  <div class="weui_tabbar">
    <a v-link="{name: 'home',activeClass:'weui_tabbar_item_active'}" class="weui_tabbar_item">
      <div class="weui_tabbar_icon"><img  src="https://unsplash.it/200/300/?random" alt="home"></div>
      <p class="weui_tabbar_label"><span>home</span></p>
    </a>
    <a v-link="{name: 'list',activeClass:'weui_tabbar_item_active'}" class="weui_tabbar_item">
      <div class="weui_tabbar_icon vux-reddot"> <img src="https://unsplash.it/200/300/?random" alt="list"> </div>
      <p class="weui_tabbar_label"> <span>list</span> </p>
    </a>
    <a v-link="{name: 'details',activeClass:'weui_tabbar_item_active'}" class="weui_tabbar_item">
      <div class="weui_tabbar_icon"> <img  src="https://unsplash.it/200/300/?random" alt="detal"> </div>
      <p class="weui_tabbar_label"> <span>details</span> </p>
    </a>
    <a v-link="{name: 'user',activeClass:'weui_tabbar_item_active'}" class="weui_tabbar_item">
      <div class="weui_tabbar_icon"> <img src="https://unsplash.it/200/300/?random" alt="user"> </div>
      <p class="weui_tabbar_label"> <span>user</span> </p>
    </a>
  </div>

</template>

<script>
  module.exports = {

  }
</script>

<style scoped>
  .weui_tabbar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #fefefe;
    border-top: 1px solid #f0f0f0;
  }
  .weui_tabbar a{
    text-decoration: none;
  }
  .weui_tabbar_item {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0.2rem 0 0;
    -webkit-tap-highlight-color: transparent;
    opacity: 0.6;
  }

  .weui_tabbar_icon {
    margin: 0 auto;
    width: 1.2rem;
    height: 1.2rem;
  }

  .weui_tabbar_item .weui_tabbar_label {
    text-align: center;
    color: #221e12;
    font-size: 0.7rem;
    margin-top: 0;
  }


  .weui_tabbar_icon img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .weui_tabbar_item_active {
    opacity: 1;
  }
</style>
