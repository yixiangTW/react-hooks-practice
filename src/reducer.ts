import { StoreType } from './type'

const reducer = (state: StoreType, action: any) => {
  if (action.type === 'AddTodo') {
    return {
      ...state,
      todoList: [...state.todoList, action.payload]
    }
  }

  if (action.type === 'RemoveTodo') {
    return {
      ...state,
      todoList: action.payload
    }
  }

  if (action.type === 'ChangeNumber') {
    return {
      ...state,
      number: action.payload
    }
  }

  if (action.type === 'AddHistory') {
    return {
      ...state,
      historyTodos: [...state.historyTodos, action.payload]
    }
  }

  return state
}

export default reducer
