<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li>
          <router-link to="/home"><i class="iconfont iconnew"></i>首页</router-link>
        </li>
        <li>
          <router-link to="/login"><i class="iconfont iconwode"></i>登录</router-link>
        </li>
        <li>
          <router-link to="/register"><i class="iconfont iconjiantou"></i>注册</router-link>
        </li>
        <li>
          <router-link to="/user"><i class="iconfont iconshipin"></i>用户</router-link>
        </li>
      </ul>
      <!-- 路由出口 -->
      <router-view></router-view>
  </div>
  </div>
</template>

<style lang="scss">
 #nav ul {
  list-style: none;
  height: 1rem;
  li {
    width: 25%;
    float: left;
    background-color: pink;
    line-height: 1rem;
    font-size: .32rem;
    text-align: center;
  }
 }
</style>
