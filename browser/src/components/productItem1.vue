<style scoped>

.product-wrap-1 {
    background-color: #fcf9fc;
    overflow: hidden;
}

.product-wrap-1 a {
    display: block;
    margin: 0;
    padding: 0;
}

.product-wrap-1 .product-img {
    width: 44%;
    overflow: hidden;
    text-align: center;
    float: left;
    padding: 1rem 0 0.5rem;
}

.product-wrap-1 .product-info {
    float: right;
    width: 50%;
    padding: 0.5rem 3% 0.5rem;
    overflow: hidden;
}

.product-wrap-1 .product-img img[lazy=loading] {
    /*your style here*/
    display: block;
    width: 100%;
}

.product-wrap-1 .product-img img[lazy=error] {
    display: block;
    width: 20%;
}

.product-wrap-1 .product-img img[lazy=loaded] {
    display: block;
    width: 100%;
}

.product-wrap-1 .product-title {
    color: #221e12;
    font-size: 1.2rem;
    font-weight: 400;
}

.product-wrap-1 .product-title .intro-1 {
    display: block;
    color: #666;
    font-size: 0.9rem;
    font-weight: 300;
}

.product-wrap-1 .product-subTitle {
    overflow: hidden;
}

.product-wrap-1 .product-subTitle .price-1 {
    font-size: 0.9rem;
    color: red;
    font-weight: 200;
}

.product-wrap-1 .product-subTitle del {
    color: #777;
    font-size: 0.8rem;
    font-weight: 300;
}

.product-wrap-1 .product-addcar {
    text-align: right;
    padding-right: 1rem;
}

.product-wrap-1 .product-addcar span {
    color: #fff;
    background-color: red;
    font-size: 1.2rem;
    padding: 0.3rem;
}

.product-wrap-1 .product-label {
    display: none;
}

.product-wrap-1 .product-label span {
    font-size: 0.7rem;
    color: #aaa;
}

</style>

<template>

<div class="product-wrap-1">
    <a v-link="{name:'details',params:{productid:productid}}">
        <div class="product-img">
            <img v-lazy="imgurl">
        </div>
        <div class="product-info">
            <p class="product-title">
                <span>{{title}}</span>
                <span class="intro-1">{{intro}}</span>
            </p>
            <p class="product-subTitle">
                <span class="price-1">{{price|toprice}}</span>
                <del>{{orig}}</del>
            </P>
            <div class="product-addcar">
                <span>加入购物车<span>
          </div>
          <div class="product-label">
              <span>包邮<span>
          </div>
        <div>
      </a>
  </div>

</template>

<script>

module.exports = {
    props: ['productid', 'imgurl', 'price', 'orig', 'title', 'intro']
}

</script>
