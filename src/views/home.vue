
<style>
  .body {
    background: #fff;
  }
</style>

<template>
  <div>
    <ul>
      <li><a v-link="{name: 'home'}">home</a></li>
      <li><a v-link="{name: 'user'}">user</a></li>
    </ul>
  </div>
<h1>home</h1>
  {{count}}
  <button v-on:click="increment()">fetchName</button>

  {{name}}
  <button v-on:click="addname">fetchName</button>

  {{message}}
</template>


<script>

  import { getName ,getCount} from '../vuex/getters';
  import { incrementCounter ,fetchname} from '../vuex/actions';

  module.exports = {
    vuex: {
      getters: {
        name: getName,
        count:getCount
      },
      actions: {
        increment: incrementCounter,
        addname:fetchname
      }
    },
    route: {
      data: function (transition) {
        setTimeout(function () {
          transition.next({
            message: 'aaaaa'
          })
        }, 10000)
      }
    }
  }
</script>
