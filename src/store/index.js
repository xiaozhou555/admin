/**
 * Created by QZ on 2018/4/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
   asideCode:false,
    kuangdu:'200px'
  },
  mutations:{
    //改变登录侧边栏状态
    changeasideCode(state,bool){
      state.asideCode = bool;
    },
    changekuangdu(state,bool){
      state.kuangdu = bool;
    },

  },
})
