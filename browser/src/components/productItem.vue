<style scoped>

.product-wrap {
    background-color: #fcf9fc;
}

.product-wrap a {
    display: block;
    margin: 0;
    padding: 0;
}

.product-img {
    width: 100%;
    overflow: hidden;
    text-align: center;
}

.product-img img[lazy=loading] {
    /*your style here*/
    display: block;
    width: 100%;
}

.product-img img[lazy=error] {
    display: block;
    width: 20%;
}

.product-img img[lazy=loaded] {
    display: block;
    width: 100%;
}

.product-title {
    color: #221e12;
    font-size: 1.2rem;
    font-weight: 400;
}

.product-subTitle {
    overflow: hidden;
}

.product-subTitle .intro {
    font-size: 0.9rem;
    color: #888;
    font-weight: 200;
    float: left;
}

.product-subTitle .price {
    color: #ff3939;
    font-size: 1.3rem;
    font-weight: 300;
    float: right;
}

</style>

<template>

<div class="product-wrap">
    <a v-link="{name:'details',params:{productid:productid}}">
        <div class="product-img">
            <img v-lazy="imgurl">
        </div>
        <p class="product-title">
            <span>{{title}}</span>
        </p>
        <p class="product-subTitle">
            <span class="intro">{{intro}}</span>
            <span class="price">{{price|toprice}}</span>
        </P>
    </a>
</div>

</template>

<script>

module.exports = {
    props: ['productid', 'imgurl', 'price', 'title', 'intro']
}

</script>
