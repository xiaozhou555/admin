<template>
  <div id="aside">
    <el-row class="tac">
      <el-col>
        <div class="title">推一推</div>
        <el-menu
          default-active="2"
          class="aside"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          @open="handleOpen"
          @close="handleClose"
          :collapse="$store.state.asideCode"
          :router=true
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="page1">选项1</el-menu-item>
              <el-menu-item index="page1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="page2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <!--<el-menu-item index="3">-->
            <!--<i class="el-icon-setting"></i>-->
            <!--<span slot="title">导航三</span>-->
          <!--</el-menu-item>-->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  #aside {
    height: 100%;
    /*background-color: #001529;*/
    overflow-x: hidden;
  }

  .tac{
    height: 100%;

    background-color: #001529;
  }
  /*侧边栏头部*/
  #aside .title {
    height: 60px;
    width: 200px;
    border: none;
    color: white;
    background-color: #00284d;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
  }
  /*侧边栏*/
  .aside {
    max-width: 200px;
    height: 100%;
    width: 100%;
  }
</style>
