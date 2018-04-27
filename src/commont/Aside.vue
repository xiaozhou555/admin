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
          <template v-for="item in items">
            <!--有子导航-->
            <template v-if="item.sub">
              <el-submenu :index="item.index">
                <template slot="title">
                  <i :class="item.icon1"></i>
                  <span>{{item.title}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="subItem in item.sub" :index="subItem.index">{{subItem.title}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
            <!--无子导航-->
            <template v-else>
              <el-menu-item :index="item.index">
                <i :class="item.icon1"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </template>
          </template>


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
        items: [
          {
            index: "1",
            title: "导航1",
            icon1: 'el-icon-location',
            sum: 1,
            sub: [
              {
                index: 'page1',
                title: '选项1'
              },
              {
                index: 'page1-2',
                title: '选项2'
              },
            ]
          },
          {
            index: "page2",
            title: "导航二",
            icon1: 'el-icon-menu',
            sum: 2
          },
        ],
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

  .tac {
    height: 100%;
    width: 100%;
    background: #001529;
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
