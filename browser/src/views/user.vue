<style scope>

.user .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 1rem;
}

.user .center img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 2px solid #ececec;
}

.order {
    background-color: #fff;
}

.order>p {
    padding: 1rem 0 0 1.2rem;
}

.order ul {
    border-top: 1px solid #d9d9d9;
    list-style: none;
    overflow: hidden;
}

.order ul li {
    float: left;
    width: 20%;
    text-align: center;
    padding-top: 0.7rem;
    padding-bottom: 0.5rem;
}

.order ul li img {
    width: 1.7rem;
    height: 1.7rem;
    display: block;
    margin: 0 auto;
}

.order ul li p {
    margin-top: 0.2rem;
    font-size: 0.8rem;
}

.menus {}

.weui_cells {
    line-height: 3.2rem;
    margin-top: 0.3rem;
}

.weui_cell_hd {
    text-align: center;
}

.weui_cell_hd img {
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
    vertical-align: middle;
}

.weui_cell_bd {
    margin-left: 0.3rem;
    font-size: 1.5rem;
}

.weui_cell_ft {
    font-size: 1.5rem;
}

.weui_cell_ft.with_arrow:after {
    height: 0.7rem;
    width: 0.7rem;
}

</style>

<template>

<div class="user">
    <blur class="blurbg" :height="userhead" :blur-amount=40 url="https://unsplash.it/150/150/?random">
        <p class="center">
            <img src="https://unsplash.it/150/150/?random">
        </p>
    </blur>
</div>
<div class="order">
    <p>全部订单</p>
    <ul>
        <li>
            <img alt="1" src="https://unsplash.it/50/50/?random"></img>
            <p>代付款</p>
        </li>
        <li>
            <img alt="1" src="https://unsplash.it/50/50/?random"></img>
            <p>代发货</p>
        </li>
        <li>
            <img alt="1" src="https://unsplash.it/50/50/?random"></img>
            <p>待收货</p>
        </li>
        <li>
            <img alt="1" src="https://unsplash.it/50/50/?random"></img>
            <p>待评价</p>
        </li>
        <li>
            <img alt="1" src="https://unsplash.it/50/50/?random"></img>
            <p>退款/售后</p>
        </li>
    </ul>
</div>
<div class="menus">
    <group>
        <cell class="cell" title="意见反馈" is-link link="#">
            <img class="icon" slot="icon" src="https://unsplash.it/100/150/?random"></img>
        </cell>
        <cell class="cell" title="版本更新" is-link link="#">
            <img class="icon" slot="icon" src="https://unsplash.it/50/50/?random"></img>
        </cell>
        <cell class="cell" title="常见问题" is-link link="#">
            <img class="icon" slot="icon" src="https://unsplash.it/50/50/?random"></img>
        </cell>
    </group>
    <group>
        <cell class="cell" title="常见问题" is-link link="#">
            <img class="icon" slot="icon" src="https://unsplash.it/50/50/?random"></img>
        </cell>
        <cell class="cell" title="版本更新" is-link link="#">
            <img class="icon" slot="icon" src="https://unsplash.it/50/50/?random"></img>
        </cell>
        <cell class="cell" title="常见问题" is-link link="#">
            <img class="icon" slot="icon" src="https://unsplash.it/50/50/?random"></img>
        </cell>
    </group>
</div>

<bottom-tab-bar></bottom-tab-bar>

</template>

<script>

import {
    getName, getCount
}
from '../vuex/getters';
import {
    incrementCounter, fetchname
}
from '../vuex/actions';
import bottomTabBar from '../components/bottomTabBar.vue';
import blur from 'vux/dist/components/blur'
import group from 'vux/dist/components/group'
import cell from 'vux/dist/components/cell'
module.exports = {
    data() {
            return {
                userhead:screen.availHeight*0.7
            }
        },
        components: {
            'bottom-tab-bar': bottomTabBar,
            'blur': blur,
            'group': group,
            'cell': cell
        },
        vuex: {
            getters: {
                name: getName,
                count: getCount
            },
            actions: {
                increment: incrementCounter,
                addname: fetchname
            }
        },
        route: {
            data: function(transition) {}
        }
}

</script>
