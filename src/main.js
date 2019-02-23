// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import Button from 'mint-ui/lib/button';
// import 'mint-ui/lib/button/style.css';
// Vue.component(Button.name, Button);
import Mint from 'mint-ui'
Vue.use(Mint)

import { Swipe, SwipeItem } from 'mint-ui';   //按需引入部分组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
