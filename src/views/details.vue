<template>
  <div onclick="history.go(-1);" style="background-color:#000;opacity: 0.5;width:10%;margin:5px;position:absolute;top: 0;left:0;z-index:100;border-radius:50%;">
    <img src="../assets/img/back.png" alt="<" style="width:100%;"></img>
  </div>
  <div>
    <swiper :list="list" auto :aspect-ratio="aspectRatio"></swiper>
  </div>
</template>

<script>
  import swiper from 'vux/dist/components/swiper'

  module.exports = {
    data(){
      return {
        product:0,
        aspectRatio:9/16,
        list: [{
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400385458&ampidx=1&ampsn=78f6b8d99715384bdcc7746596d88359&ampscene=19#wechat_redirect',
          img: 'https://unsplash.it/200/300/?random',
          title: '如何手制一份秋意的茶？'
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400160890&ampidx=1&ampsn=29ef02af25793a11a3f6aec92bfb46c1&ampscene=19#wechat_redirect',
          img: 'https://unsplash.it/200/300/?random',
          title: '茶包VS原叶茶'
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400094682&ampidx=1&ampsn=8231a2053b772b2108784fccc254d28c&ampscene=19#wechat_redirect',
          img: 'https://unsplash.it/200/300/?random',
          title: '播下茶籽，明春可发芽？'
        }],
      }
    },
    components:{
      'swiper':swiper
    },
    route:{
      data: function (transition) {
       setTimeout(function () {
         transition.next({
           product: transition.to.params.productid
         })
       }, 1000)
     }
    }

  }
</script>

<style>

</style>
