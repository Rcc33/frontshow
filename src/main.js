import Vue from 'vue'
import App from './App.vue'
import router from './router'
import infiniteScroll from "vue-infinite-scroll";
import axios from 'axios'

axios.defaults.baseURL = '/'  // axios请求的初始路径
// Vue.prototype.$api = ''; // 上线时开启，把反向代理关掉即可，线上不存在跨域，存在也是后端解决
Vue.prototype.$api = '/api'; // 本地开发，开启反向代理

import {
  Button, Tabs, TabPane, Row,
  Col, Card, Divider
} from 'element-ui';

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Divider)
Vue.use(infiniteScroll);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
