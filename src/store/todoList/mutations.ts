import { ITodoItem, ITodoList } from '@/types/todoList'
import { SET_TOOD } from './actionTypes'

export default {
  [SET_TOOD]: (state: ITodoList, todo: ITodoItem): void => {
    state.list.push(todo)
  }
}
