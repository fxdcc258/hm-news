import Vue from 'vue'
import App from './App.vue'
// 导入 rem 的 js, 动态的设置了, 不同屏幕的html根元素的 font-size
import 'lib-flexible'
// 导入路由规则
// 按照eslint代码规范实现通过路由实现展示不同组件
import router from './router'
// 导入初始化样式
import './css/base.css'
// 导入字体图片样式库
import './fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
