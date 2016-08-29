<template>
  <div id="my-tab">
    <tab active-color="#221e12" default-color="#aaaaaa" class="my-tab">
        <tab-item :selected="demo1 === '首页'" @click="demo1 = '首页'" class="my-tab-item">首页</tab-item>
        <tab-item :selected="demo1 === '今日新品'" @click="demo1 = '今日新品'" class="my-tab-item">今日新品</tab-item>
        <tab-item :selected="demo1 === '活动特价'" @click="demo1 = '活动特价'" class="my-tab-item">活动特价</tab-item>
        <tab-item :selected="demo1 === '掌柜推荐'" @click="demo1 = '掌柜推荐'" class="my-tab-item">掌柜推荐</tab-item>
        <tab-item :selected="demo1 === '超值热卖'" @click="demo1 = '超值热卖'" class="my-tab-item">超值热卖</tab-item>
    </tab>
  </div>
  <div id="my-banner">
    <swiper :list="list" auto :aspect-ratio="aspectRatio"></swiper>
  </div>
  <div>
    <product-item1 productid="0" imgurl="https://unsplash.it/350/200/?random" title="你是一个伤感" intro="好打hi爱好上帝和赛后的" price="1212" orig="1355"></product-item0>
  </div>
  <div>
    <product-item0 productid="0" imgurl="https://unsplash.it/350/200/?random" title="你是一个伤感" intro="好打hi爱好上帝和赛后的" price="1212" orig="1355"></product-item0>
  </div>
  <div>
    <product-item productid="0" imgurl="https://unsplash.it/350/200/?random" title="你是一个伤感" intro="好打hi爱好上帝和赛后的" price="1212"></product-item>
  </div>
  <div style="height:10rem">
  </div>
  <bottom-tab-bar></bottom-tab-bar>
</template>


<script>

  import tab from 'vux/dist/components/tab';
  import tabItem from 'vux/dist/components/tab-item';
  import swiper from 'vux/dist/components/swiper';
  import bottomTabBar from '../components/bottomTabBar.vue';
  import productItem from '../components/productItem.vue'
  import productItem0 from '../components/productItem0.vue'
  import productItem1 from '../components/productItem1.vue'


  module.exports = {
    data: function () {
        return {
          aspectRatio:9/16,
          demo1: '首页',
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
          }]
        }
    },
    components:{
      'bottom-tab-bar':bottomTabBar,
      'tab':tab,
      'tab-item':tabItem,
      'swiper':swiper,
      'product-item':productItem,
      'product-item0':productItem0,
      'product-item1':productItem1
    },
  }
</script>

<style>
  #my-tab {
    padding: 0.4rem 0 0rem;
    background-color: #fdfdfd;
  }
  #my-tab .my-tab{
    height:auto;
  }
  #my-tab .my-tab .my-tab-item{
    line-height: 4rem;
    font-size: 2rem;
    background: none;
  }
  #my-banner{
    margin-top: 0px;
  }
</style>
