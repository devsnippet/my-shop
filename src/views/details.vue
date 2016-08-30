<style>

.product-meta {
    padding: 2rem 1rem;
    background-color: #fff;
    position: relative;
}

.product-meta .sale-price {
    display: inline-block;
}

.product-meta .sale-price i {
    font-size: 2rem;
}

.product-meta .sale-price span {
    font-size: 3rem;
}

.product-meta .market-price {
    font-size: 2rem;
    color: #999;
    padding: 0 0.5rem;
}

.product-meta .discount {
    display: inline-block;
    border: 1px solid #f79;
    padding: 0 0.5rem;
    color: #f79;
    font-size: 2rem;
}

.product-meta .collect {
    float: right;
    overflow: hidden;
}

.product-meta .collect img {
    height: 3rem;
    width: 3rem;
    margin-top: 1rem;
    bottom: 0;
}

.product-meta h1 {
    text-indent: 1.5rem;
}

.comments {
    margin-top: 1rem;
    background-color: #fff;
    height: 7rem;
}

.service {
    margin-top: 1rem;
    background-color: #fff;
}

.service ul {
    overflow: hidden;
    list-style: none;
}

.service ul li {
    float: left;
    line-height: 6rem;
    margin-left: 2rem;
}

.service ul li img {
    vertical-align: middle;
    width: 2rem
}

.service ul li span {
    margin-left: 0.2rem;
    vertical-align: middle;
    font-size: 1.8rem;
}

</style>

<template>

<div>
    <div>
        <div onclick="history.go(-1);" style="background-color:#000;opacity: 0.4;width:5em;margin:1em;padding:0.5em;position:absolute;top: 0;left:0;z-index:100;border-radius:100%;">
            <img src="../assets/img/back.png" alt="<" style="width:100%;"></img>
        </div>
        <div>
            <swiper :list="list" auto :aspect-ratio="aspectRatio"></swiper>
        </div>
    </div>
    <div class="product-meta">
        <div>
            <p class="sale-price">
                <i>￥</i>
                <span>59</span>
            </p>
            <del class="market-price">
              <i>￥</i>
              <span>59</span>
            </del>
            <p class="discount">
                0.8<span>折</span>
            </p>
            <div class="collect">
                <img src="/static/img/collected.png" />
            </div>
        </div>
        <h1>
            每天精选100+品牌授权特卖，100%正品保证，限时特卖!商品囊括时尚服饰，美妆，居家，母婴
        </h1>
    </div>
    <div class="comments">评价</div>
    <div class="service">
        <ul>
            <li>
                <img src="../assets/img/tick.png" /><span>7天包退</span>
            </li>
            <li>
                <img src="../assets/img/tick.png" /><span>退货返运费</span>
            </li>
            <li>
                <img src="../assets/img/tick.png" /><span>7天包退</span>
            </li>
            <li>
                <img src="../assets/img/tick.png" /><span>7天包退</span>
            </li>
        </ul>
    </div>
    <div>图文</div>
    <div>推荐</div>
    <div class="">促销</div>
    <div>规格</div>

</div>

</template>

<script>

import swiper from 'vux/dist/components/swiper'

module.exports = {
    data() {
            return {
                t: "<h1>ttt</h1>",
                product: 0,
                aspectRatio: 1,
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
        components: {
            'swiper': swiper
        },
        route: {
            data: function(transition) {
                setTimeout(function() {
                    transition.next({
                        product: transition.to.params.productid
                    })
                }, 1000)
            }
        }
}

</script>
