import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 自定义动画引入
import 'animate.css'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// 引入axios
import axios from "axios";
Vue.prototype.$axios = axios;
// 引入UI
import elementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(elementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
