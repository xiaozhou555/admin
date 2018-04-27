/**
 * Created by QZ on 2018/4/27.
 */
import axios from 'axios'
import qs from 'qs'

//the axios config
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-	urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://**.106.221.124/***';//域名

//axios请求拦截器
axios.interceptors.request.use(function(config){
  if(config.method === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},function(error){
  return Promise.reject(error);
});

//axios响应拦截器
axios.interceptors.response.use(function(response){
  // let result = JSON.parse(response.data);
  let result = response.data;
  console.log(result);
  if(result.code===-2333){
    location.hash = '/';
  }
  return result;
},function(error){
  return Promise.reject(error);
});

export default{
  //登录接口
  login(datas){
    return axios.post('**/***', datas);
  },
  //注册接口
  register(datas){
    return axios.get('user/regisUser', datas);
  },

}
