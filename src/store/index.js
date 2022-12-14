// 入口文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import mutations from './mutation'

const store = new Vuex.Store({
    state,
    mutations
})

export default store