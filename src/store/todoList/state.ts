import { ITEM_STATUS, ITodoList } from '@/types/todoList'

export default <ITodoList>{
  list: [
    {
      id: 0,
      key: 0,
      time: '2020-12-1',
      content: '看电影',
      status: ITEM_STATUS.DONE
    },
    {
      id: 1,
      key: 1,
      time: '2020-12-2',
      content: '慢跑5公里',
      status: ITEM_STATUS.DONING
    },
    {
      id: 2,
      key: 2,
      time: '2020-12-3',
      content: '学习',
      status: ITEM_STATUS.WILLDO
    }
  ]
}
