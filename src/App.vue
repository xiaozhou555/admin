<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #ECECEC;
  /*background:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504339520&di=ef801f6cf3b32df785f351fdf53df3cd&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F58c62a8bc382c.jpg) center no-repeat;*/
  background-size: 100%;
}
</style>
