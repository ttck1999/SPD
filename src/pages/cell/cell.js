import Vue from 'Vue'
import VueRouter from "vue-router";
import Cell from './Cell.vue'
import BasicsIndices from '../../components/BasicsIndices.vue'
import WeightPending from '../../components/WeightPending.vue'
import store from "./vuex-store.js";

Vue.config.productionTip = false
Vue.use(VueRouter);

// 程序全功能正常运行所需路由
let routes = [
  {
    name: "indices",
    path: "/indices",
    component: BasicsIndices
  },
  
  {
    name: "pending",
    path: "/pending",
    component: WeightPending
  },
  {
    path: "/",
    // 设置页面目前必须存在至少一个设置项，要么有基线设置，要么有权重配置
    // 如果两个都没有，则设置页也不会有
    redirect: "/indices"
  }
];
const router = new VueRouter({
  routes
});
/* eslint-disable no-new */
new Vue({
  el: '#cell',
  router,
  store,
  render: h => h(Cell)
})

