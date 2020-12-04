interface ITodoList {
  list: ITodoItem[];
}

interface ITodoItem {
  id: number;
  key: number;
  time: string;
  content: string;
  status: ITEM_STATUS;
}

enum ITEM_STATUS {
  WILLDO = 'willdo',
  DONING = 'doing',
  DONE = 'done'
}

export {
  ITodoList,
  ITodoItem,
  ITEM_STATUS
}

interface Animal {
  name: string
}