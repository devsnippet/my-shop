<style scoped>

.content {
    background-color: #fff;
}

.header {
    overflow: hidden;
    background-image: url('https://unsplash.it/150/150/?blur');
    background-size: 100%;
    background-repeat: repeat;
}

.header .logo {
    text-align: center;
    padding-top: 1rem;
    color: #fff;
    font-size: 1rem;
}

.header .logo img {
    width: 5rem;
    border: 2px solid #ececec;
    vertical-align: middle;
}

.header .action {
    margin-top: 1.5rem;
}

.header .action .login {
    float: left;
    width: 44%;
    text-align: center;
    color: #ffffff;
}

.header .action .login a {
    color: #ddd;
}

.header .action .split {
    float: left;
    width: 12%;
    text-align: center;
    font-weight: 200;
    color: #e6e6e6;
}

.header .action .signup {
    float: left;
    width: 44%;
    text-align: center;
    color: #ffffff;
}

.header .action .signup a {
    color: #ffffff;
}

.sanjiao {
    width: 1rem;
    height: 1rem;
    display: block;
    margin: 0 auto;
}

.from {
    background-color: #fff;
    overflow: hidden;
}

.from .group {
    margin-top: 0;
}

.input {
    font-size: 1rem;
    line-height: 2.5rem;
}

.from .submit {
    border-radius: 0.7rem;
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: #fff;
    text-align: center;
    background-color: #333;
    margin: 0.5rem 1rem;
}

#sendCode {
    font-size: 1rem;
}

</style>

<template>

<div class="content">
    <div class="header">
        <p class="logo">
            <img src="https://unsplash.it/150/150/?random">
        </p>
        <div class="action">
            <div class="login">
                <a v-link="{name: 'login',activeClass:'weui_tabbar_item_active'}">登录</a>
            </div>
            <div class="split"><span>|</span></div>
            <div class="signup">
                <a v-link="{name: 'signup',activeClass:'weui_tabbar_item_active'}">注册</a>
                <img class="sanjiao" src="../assets/img/sanjiao.png" />
            </div>
        </div>
    </div>
    <div class="from">
        <group class="group">
            <x-input class="input" :value.sync="tel" title="手机号" placeholder="" v-ref:input is-type="china-mobile" :show-clear="true"></x-input>
            <x-input class="input" :value.sync="verifiedCode0" title="验证码" equal-with="verifiedCode1" placeholder="" v-ref:input :show-clear="false">
                <span id="sendCode" v-on:click="sendCode">{{countdown}}</span>
            </x-input>
            <x-input class="input" :value.sync="password" title="密码" placeholder="" v-ref:input :show-clear="true"></x-input>
        </group>
        <p class="submit">注册</p>
    </div>
    <div class="agreement">
    </div>
</div>

</template>

<script>

var Vue = require('vue');
import {
    getName, getCount
}
from '../vuex/getters';
import {
    incrementCounter, fetchname
}
from '../vuex/actions';
import blur from 'vux/dist/components/blur'
import group from 'vux/dist/components/group'
import xinput from 'vux/dist/components/x-input'

module.exports = {
    data() {
            return {
                userhead: window.screanWidth * 0.61,
                tel: '',
                password: '',
                verifiedCode0: '',
                verifiedCode1: null,
                countdown: '发送验证码',
                isCountdowning: false,
            }
        },
        methods: {
            sendCode() {
                if (this.isCountdowning) {
                    return;
                }
                let data = {
                        tel: this.tel
                };
                this.startCountdown();
                this.$http
                    .post('/user/verifyCode', data)
                    .then((response) => {
                        alert('ok' + response.body + response.status);
                    }, (response) => {
                        alert('err' + response.body + response.status);
                    });
            },
            startCountdown() {
                this.isCountdowning = true;
                this.countdown = 60;
                let countdowninterval = window.setInterval(() => {
                    this.countdown--;
                    if (this.countdown < 1) {
                        window.clearInterval(countdowninterval);
                        this.isCountdowning = false;
                        this.countdown = '重新发送';
                    }
                }, 1000);
            },
        },
        components: {
            'blur': blur,
            'group': group,
            'x-input': xinput
        },
}

</script>
