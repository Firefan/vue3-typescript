import { ITodoItem, ITodoList } from '@/types/todoList'

export default {
  getTodoList: (state: ITodoList): ITodoItem [] => {
    return state.list
  }
}
