<template>
  <div>
    <ul>
      <li><a v-link="{name: 'home'}">home</a></li>
      <li><a v-link="{name: 'user'}">user</a></li>
    </ul>
  </div>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
  };
</script>

<style>
</style>
