<style>

.product-meta {
    padding: 1rem 0.5rem;
    background-color: #fff;
    position: relative;
}

.product-meta .sale-price {
    display: inline-block;
}

.product-meta .sale-price i {
    font-size: 1rem;
}

.product-meta .sale-price span {
    font-size: 2rem;
}

.product-meta .market-price {
    font-size: 0.8rem;
    color: #999;
    padding: 0 0.5rem;
}

.product-meta .discount {
    display: inline-block;
    border: 1px solid #f79;
    padding: 0 0.5rem;
    color: #f79;
    font-size: 1rem;
}

.product-meta .collect {
    float: right;
    overflow: hidden;
}

.product-meta .collect img {
    height: 1.5rem;
    width: 1.5rem;
    margin-top: 0.5rem;
    bottom: 0;
}

.product-meta h1 {
    font-size: 0.84rem;
    margin-top: 0.5rem;
    text-indent: 2rem;
    font-weight: normal;
}

.comments {
    margin-top: 0.3rem;
    background-color: #fff;
    height: 7rem;
}

.service {
    margin-top: 0.3rem;
    background-color: #fff;
}

.service ul {
    overflow: hidden;
    list-style: none;
    margin-left: 0.5rem;
}

.service ul li {
    float: left;
    line-height: 2.5rem;
    margin-left: 1rem;
}

.service ul li img {
    vertical-align: middle;
    width: 1rem
}

.service ul li span {
    margin-left: 0.2rem;
    vertical-align: middle;
    font-size: 1rem;
}

.shoppingcar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.6rem 1rem;
    background-color: #fff;
    height: 3rem;
    line-height: 2.5rem;
    border-top: 1px solid #999;
}

.shoppingcar .car-box {
    position: relative;
    float: left;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 0.2rem;
    width: 29%;
}

.shoppingcar .car-box img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 40%;
    vertical-align: middle;
}

.shoppingcar .submit-box {
    position: relative;
    float: right;
    width: 69%;
    background-color: #f77;
    text-align: center;
    height: 100%;
    border-radius: 0.2rem;
}

.shoppingcar .submit-box span {
    vertical-align: middle;
    text-align: center;
    color: #fff;
    font-size: 1.6rem;
}

.product-attr {
    margin: 0.5rem 0;
    padding: 1rem;
    background-color: #fff;
}

.product-attr h3 {}

.product-attr .point-describe {
    font-size: 1rem;
    margin-top: 0.5rem;
    text-indent: 2rem;
}

.product-attr table {
    border-top: 1px solid #aaa;
    margin-top: 0.6rem;
    padding-top: 0.7rem;
    font-size: 1.2rem;
}

.product-img {
    background-color: #fff;
    margin-top: 0.5rem;
}
.product-img h3{
  text-align: left;
  margin:0.7rem 0;
}
.product-tips {
    margin-top: 0.5rem;
    background-color: #fff;
}

.product-tips ul {
    list-style: none;
}

.product-tips ul li {
    line-height: 2rem;
    padding: 0.1rem 2rem;
}

.product-tips .tips-type {
    text-align: center;
    border: 1px solid #5682c1;
    color: #5682c1;
    padding: 0.1rem 0.8rem;
    font-size: 0.3rem;
    border-radius: .05333rem;
    vertical-align: middle;
    margin-right: 0.8rem;
}

.product-tips .tips-datail {
    font-size: 1.3rem;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    vertical-align: middle;
}

</style>

<template>

<div>
    <div class="product-swiper">
        <div onclick="history.go(-1);" style="background-color:#000;opacity:0.4;height:1.5rem;width:1.5rem;margin:0.5em;padding:0.5em;position:absolute;top: 0;left:0;z-index:9999;border-radius:100%;
        background-image:url('/static/img/back.png');background-size: cover;">
        </div>

        <swiper :list="list" auto :aspect-ratio="aspectRatio"></swiper>

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
    <div class="product-tips">促销
        <ul>
            <li>
                <span class="tips-type">包邮</span>
                <p class="tips-datail">该商品免邮费</p>
            </li>
            <li>
                <span class="tips-type">包邮</span>
                <p class="tips-datail">该商品免邮费</p>
            </li>
            <li>
                <span class="tips-type">包邮</span>
                <p class="tips-datail">该商品免邮费</p>
            </li>
        </ul>
    </div>
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
    <div class="comments">评价</div>
    <div class="product-attr">

        <h3 id="J-pro-param-scroll">商品信息</h3>

        <div class="point-describe">炙手可热的明星面膜，你美你先抢！含清洁因子吸黑面膜贴，吸附毛孔垃圾，改善肌肤外油内干、缺水、粗糙松弛等状态。补水又锁水，回复肌肤细腻饱满状态，嫩弹可人！一见，怦然心动！</div>

        <table>
            <tbody>
                <tr class="product-attr-item">
                    <td>品牌名称：</td>
                    <td>御泥坊</td>
                </tr>
                <tr class="product-attr-item">
                    <td>商品名称：</td>
                    <td>水动力清爽吸黑面膜套装 21片</td>
                </tr>
                <tr class="product-attr-item">
                    <td>产地：</td>
                    <td>广东/上海/湖南</td>
                </tr>
                <tr class="product-attr-item">
                    <td>套装明细：</td>
                    <td>清爽平衡矿物蚕丝面膜（黑面膜）21片</td>
                </tr>
                <tr class="product-attr-item">
                    <td>有效期：</td>
                    <td>2019年（具体日期以收到实物为准）</td>
                </tr>
                <tr class="product-attr-item">
                    <td>规格：</td>
                    <td>21片</td>
                </tr>
                <tr class="product-attr-item">
                    <td>特点描述：</td>
                    <td>吸黑补水，保湿亮肤</td>
                </tr>
                <tr class="product-attr-item">
                    <td>适用肤质：</td>
                    <td>所有肤质&nbsp;&nbsp;</td>
                </tr>
                <tr class="product-attr-item">
                    <td>适用对象/性别：</td>
                    <td>所有人群&nbsp;&nbsp;</td>
                </tr>
                <tr class="product-attr-item">
                    <td>护肤功效：</td>
                    <td>补水保湿&nbsp;&nbsp;</td>
                </tr>
                <tr class="product-attr-item">
                    <td>类型：</td>
                    <td>贴膜&nbsp;&nbsp;</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="product-img">
        <h3>商品图片</h3>
        <img v-lazy="imgurl">
    </div>
    <div>推荐</div>
    <div style="height:5rem;"></div>
    <div class="shoppingcar">
        <div class="car-box">
            <img src="../assets/img/shopcar.png" />
        </div>
        <div class="submit-box">
            <span>加入购物车</span>
        </div>
    </div>
</div>

</template>

<script>

import swiper from 'vux/dist/components/swiper'

module.exports = {
    data() {
            return {
                t: "<h1>ttt</h1>",
                product: 0,
                imgurl: "https://unsplash.it/300/1300/?random",
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
