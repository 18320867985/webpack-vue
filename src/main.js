// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* ElementUI */
// import ElementUI from 'element-ui';
//  Vue.use(ElementUI);
// import 'element-ui/lib/theme-chalk/index.css';

import  element from "./element-ui.js";
import './element-variables.scss';
element();



/* eslint-disable no-new */
new Vue({
  router,
render: (h) => h(App),
}).$mount("#app")
