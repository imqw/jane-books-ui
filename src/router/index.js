import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import HelloWorld from '@/components/HelloWorld'
import IndexVue from '@/topHeader/IndexVue'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'IndexVue',
      component: IndexVue
    }
  ]
})
