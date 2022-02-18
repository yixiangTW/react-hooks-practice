export type Todo = {
  content: string;
  id: number;
}

export type StoreType = {
  number: number;
  todoList: Todo[]
}