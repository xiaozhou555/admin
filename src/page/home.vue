<template>
  <div id="home">
    <el-container>
      <el-aside :width="$store.state.kuangdu">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header height="120px">
          <Header></Header>
        </el-header>
        <el-main>
          <transition name="move" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import Aside from '../commont/Aside.vue'
  import Header from '../commont/Header.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      kuangdu:'200px'
    }
  },
  components:{
    Aside,Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  position: absolute;
  text-align: left;
  height: 100%;
  width: 100%;
}
#home .el-container{
  height: 100%;
}

.el-header {
   padding: 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

</style>
