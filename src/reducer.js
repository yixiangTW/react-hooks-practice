const reducer = (state, action) => {
  if(action.type === 'AddTodo') {
    return {
      ...state,
      todoList: [...state.todoList, action.payload]
    }
  }

  if(action.type === 'RemoveTodo') {
    return {
      ...state,
      todoList: action.payload
    }
  }

  if(action.type === 'ChangeNumber') {
    return {
      ...state,
      number: action.payload
    }
  }

  return state
}

export default reducer
