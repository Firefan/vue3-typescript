import { ITodoItem, ITodoList } from '@/types/todoList'
import { Commit } from 'vuex'
import { SET_TOOD } from './actionTypes'

interface ICtx {
  commit: Commit;
  state: ITodoList;
}

export default {
  SET_TOOD: ({ commit }: ICtx, todo: ITodoItem): void => {
    commit(SET_TOOD, todo)
  }
}
