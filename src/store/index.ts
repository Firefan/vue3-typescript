import { createStore } from 'vuex'
import todoList from './todoList/index'

export default createStore({
  modules: {
    todoList
  }
})
