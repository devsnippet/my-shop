<style scoped>
.content{
  position: fixed;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
}
.header{
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
.header .action{
  margin-top: 1.5rem;
}
.header .action .login{
  float: left;
  width: 44%;
  text-align: center;
  color:#ffffff;
}
.header .action .login a{
  color:#ffffff;
}
.header .action .split{
  float: left;
  width: 12%;
  text-align: center;
  font-weight: 200;
  color:#f3f3f3;
}
.header .action .signup{
  float: left;
  width: 44%;
  text-align: center;
  color:#ffffff;
}
.header .action .signup a{
  color:#ffffff;
}
.sanjiao{
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto;
}

.from{
  background-color: #fff;
  overflow: hidden;
}
.from .group{
  margin-top: 0;
}
.input{
  font-size: 1rem;
  line-height: 2.5rem;
}
.weui_icon{
  width: 2rem;
}
.from .submit{
  border-radius: 0.7rem;
  font-size: 1.2rem;
  line-height: 2.5rem;
  color: #fff;
  text-align: center;
  background-color: #333;
  margin: 0.5rem 1rem;
}
#forgetPass{
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
            <a  v-link="{name: 'login',activeClass:'weui_tabbar_item_active'}">登录</a>
            <img class="sanjiao" src="../assets/img/sanjiao.png" />
          </div>
          <div class="split"><span>|</span></div>
          <div class="signup">
             <a  v-link="{name: 'signup',activeClass:'weui_tabbar_item_active'}">注册</a>
          </div>
        </div>
  </div>
  <div class="from">
    <group class="group">
      <x-input class="input" :value.sync="tel" title="手机号" placeholder="" v-ref:input is-type="china-mobile" :show-clear="false"></x-input>
      <x-input class="input" :value.sync="password" title="密码" placeholder="" v-ref:input :show-clear="false">
        <span id="forgetPass">忘记密码?</span>
      </x-input>
    </group>
    <p class="submit">登录</p>
  </div>
  <div class="agreement">
  </div>
  {{tel}}
</div>

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
import blur from 'vux/dist/components/blur'
import group from 'vux/dist/components/group'
import xinput from 'vux/dist/components/x-input'

module.exports = {
  data(){
    return {
      userhead:window.screanWidth*0.61,
      tel:'',
      password:''
    }
  },
  components: {
    'blur': blur,
    'group': group,
    'x-input': xinput
    },
}

</script>
