import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        task: 'Code',
        completed: true
      },
      {
        task: 'Eat',
        completed: false
      },
      {
        task: 'Sleep',
        completed: false
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    todos: state => state.todos
  }
})
