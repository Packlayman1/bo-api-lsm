import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: [],
  statusl_login: false,
  activebtn: '/home'
}

const mutations = {
  addText: (state, name) => {
    state.todos.push({ name: name })
  }
}

const getters = {
  todos: state => state.todos,
}


let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
})

global.store = store
export default store