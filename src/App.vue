<template>
  <div id="app">
    <div id="nav">
      <van-tabbar id="box">
        <van-tabbar-item to="/" icon="like-o">猜你喜欢</van-tabbar-item>
        <van-tabbar-item to="/sort" icon="search">分类</van-tabbar-item>
        <van-tabbar-item to="/top" icon="orders-o">排行榜</van-tabbar-item>
        <van-tabbar-item to="/cart" icon="shopping-cart-o"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item to="/mytesco" icon="circle">我的易购</van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  padding-bottom: 2rem;
}
#nav {
  width: 100%;
  // border: 2px solid black;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}

#box {
  box-sizing: content-box;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  width: 15rem;
  height: 2rem;
  z-index: 199;
  border-top: 1px solid #eee;
  background: #fff;
  transition: all 0.2s linear;
}
</style>
