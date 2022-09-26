import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Detail from '@/pages/Detail'
import City from '@/pages/City'
import List from '@/pages/List'
import Search from '@/pages/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
