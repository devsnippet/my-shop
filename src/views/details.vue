
<style>

</style>

<template>
{{message}}
{{$loadingRouteData}}
<div v-if="!loaded">
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</div>
</template>


<script>

  module.exports = {
    data(){
      return {
        product:null,
        loaded:false
      }
    },
    components:{

    },
    route:{
      data: function (transition) {
       setTimeout(function () {
         alert(JSON.stringify(transition.to.params));
         transition.next({
           product: transition.to.params.productid
           ,loaded:true
         })
       }, 1000)
     }
    }

  }
</script>
