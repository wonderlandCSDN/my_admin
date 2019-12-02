// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Router from 'vue-router'
import Vuex from 'vuex'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'
// import './theme/element-variables.scss'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条 样式
import Utils from './utils/utils'

/** 解决vue在控制台的 NavigationDuplicated 报错(https://blog.csdn.net/gxdvip/article/details/101016946)*/
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.config.productionTip = false;

/**全局设置element-ui关闭弹框只有点击按钮才会产生效果 */
ElementUI.Dialog.props.closeOnClickModal.default = false;

/**
 * 开发模式：npm run dev是前端自己开发用的
 * 生产模式：npm run build 打包之后给后端放在服务端上用的
 * Vue.config.productionTip = false——阻止显示生产模式的消息。
 * 如果没有这行代码，或者设置为true，控制台就会多出这么一段代码。
 * You are running Vue in development mode.
 * Make sure to turn on production mode when deploying for production
 * 其意思是： 你运行的Vue是开发模式。为生产部署时，请确保启用生产模式。
 */

Vue.use(ElementUI);
Vue.use(Vuex);

Vue.prototype.$utils = Utils;
Vue.prototype.$nprogress = NProgress;

/**
 * 表格样式
 * @param row
 * @param column
 * @param rowIndex
 * @param columnIndex
 * @returns {*}
 */
Vue.prototype.getRowClass = function ({row, column, rowIndex, columnIndex}) {
  if (rowIndex === 0) {
      return 'background:#eef1f6;color:#333;font-weight:bold;';
  } else {
      return '';
  }
}

/**使用钩子函数对路由进行权限跳转 */
let whileList = [];
router.beforeEach((to, from, next)=>{
  // NProgress.start();
  console.log(to);
  console.log(from);
  document.title = to.meta.title;
  next();
  alert('aaa');
});

/**全局后置钩子 */
router.afterEach((to, from)=> {
  // NProgress.done();
  alert('bbb');
});



new Vue({
  router,
  store, // 使用store
  render: h => h(App)
}).$mount('#app');
