<template>

  <div class="product-wrap">
    <a v-link="{name:'details',params:{productid:productid}}">
        <div class="product-img">
          <img v-lazy="imgurl">
        </div>
        <div class="product-label">
            <p>
                <span>特价</span>
            </p>
        </div>
        <p class="product-title">
          <span>{{title}}</span>
        </p>
        <p class="product-subTitle">
            <span class="intro">{{intro}}</span>
        </P>
        <p class="product-price">
          <span class="label">限今日</span>
          <span class="price">{{price|toprice}}</span>
          <del>{{orig}}</del>
        </P>
      </a>
  </div>

</template>

<script>

module.exports = {
  props: ['productid','imgurl','price','orig','title','intro']
}

</script>

<style>
  .product-wrap{
    background-color: #fcf9fc;
  }
  .product-wrap a{
    display: block;
    margin: 0;
    padding: 0;
  }
  .product-img{
    width:100%;
    overflow: hidden;
    text-align: center;
  }
  .product-img img[lazy=loading] {
    /*your style here*/
    display:block;
    width: 100%;
  }
  .product-img img[lazy=error] {
    display:block;
    width: 20%;
  }
  .product-img img[lazy=loaded] {
    display:block;
    width: 100%;
  }
  .product-title{
    color: #221e12;
    font-size: 3rem;
    font-weight: 400;
  }
  .product-subTitle{
    overflow: hidden;
  }
  .product-subTitle .intro{
    font-size: 1.5rem;
    color: #888;
    font-weight: 200;
    float: left;
  }
  .product-price{
    color: red;
    font-size: 2rem;
    font-weight: 300;
  }
  .product-price .label{
    color: #fff;
    font-size: 1.3rem;
    font-weight: 400;
    background-color: red;
    padding: 0.5rem;
  }
  .product-price .price{
    font-size: 1.5rem;
    font-weight: 300;
    margin-left: 1rem;
  }
  .product-price del{
    font-size: 1rem;
    font-weight: 300;
    margin-left: 0.5rem;
  }
  .product-label{
    position: relative;
  }
  .product-label p{
    position: absolute;
    right:0;
    top:-4rem;
  }
  .product-label p span{
    float:right;
    font-size:2rem;
    color: red;
    margin-right: 1rem;
    background-color: red;
    color: #fff;
    padding: 0.8rem;
  }
</style>
