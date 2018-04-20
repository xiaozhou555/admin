<template>
  <div id="header">
    <div class="top">
      <div class="left">
        <i class="el-icon-more" @click="changeSide"></i>
      </div>
      <div class="rigth">
        <i class="el-icon-search"></i>
        <i class="el-icon-bell"></i>

        <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <img
          src="../../static/img/touxiang.jpeg">
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item  command="out">注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <p>name</p>
      </div>
    </div>
   <div class="bottom">
       {{localed}}
   </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        local:'',
      }
    },
    computed:{
       localed(){
         switch (this.local){
           case 'page1':
             return '导航栏一/选项1'
           break;
           case 'page1-2':
             return '导航栏一/选项2'
           break;
           case 'page2':
             return '导航栏二'
         }
       }
    },
    created(){
      this.local=this.$route.name
    },
    watch:{
      '$route' (to, from ){
        console.log(to);
        console.log(from);
        this.local=this.$route.name
      }
    },
    methods: {
      changeSide(){
        const self = this;
        self.$store.commit("changeasideCode", !self.$store.state.asideCode);
        if (self.$store.state.asideCode) {
          self.$store.commit("changekuangdu", '65px');
        } else {
          self.$store.commit("changekuangdu", '200px');
        }
      },
      handleCommand(command){
        const self = this;
        switch (command){
          case 'out':
            console.log('4564');
            self.$router.push({'name':'login'});//跳入主页
            sessionStorage.removeItem('token')
        }
      }
    }
  }
</script>

<style>
  #header {
    position: relative;
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: solid 1px #ccc;
    background-color: white;
  }

  #header > .top {
    display: flex;
    height: 60px;
    border-bottom: solid 1px #ccc;
    justify-content: space-between;
  }
  #header > .bottom{
    line-height: 60px;
    margin-left: 20px;
    font-size: 16px;
  }

  #header > .top > .left {
    font-size: 26px;
    line-height: 59px;
    margin-left: 20px;
    cursor: pointer;
  }

  #header > .top > .rigth {
    min-width: 250px;
    /*background-color: yellow;*/
    height: 59px;
    font-size: 24px;
    margin-right: 25px;
    display: flex;
    justify-content: space-around;
  }

  #header > .top > .rigth > i {
    line-height: 59px;
    cursor: pointer;
  }
  #header > .top > .rigth img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    top:14px;
    cursor: pointer;
  }
  #header > .top > .rigth>p{
    font-size: 16px;
    line-height: 59px;
    position: relative;
    left: -20px;
    cursor: pointer;
  }
</style>
