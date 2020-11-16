import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import io from 'socket.io-client'; 
/** 모바일 데스크탑 통신이 안될경우 localhost:port 가 아닌 구동되는 IP를적으면된다. */
// const socket = io('http://localhost:3001');  

// const socket = io('http://192.168.53.31:3001');  

const socket = io('http://3.34.185.148:3001');


Vue.prototype.$socket = socket;

Vue.config.productionTip = false

axios.defaults.baseURL = '/api'  //모든 요청에 '/api' 붙도록 기본 설정           
axios.defaults.headers.common.Accept = 'application/json'//JSON 형식으로만 받는다 

axios.interceptors.response.use(  //Error 전파하기 위해 인터셉터 응답을 추가한다. 

  response => response,                                                        

  (error) => {                                                                 

    return Promise.reject(error)                                               

  }                                                                            

)    

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
