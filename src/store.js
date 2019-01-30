import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {name: 'Banana skin', price: 20},
      {name: 'Shiny star', price: 40},
      {name: 'Green shells', price: 60},
      {name: 'Red shells', price: 80}
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
