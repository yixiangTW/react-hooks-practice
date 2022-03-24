import React, { useRef, useReducer } from 'react'
import { Toaster } from 'react-hot-toast'

import TodoList from './Todo'
import Histotry from './History'

import reducer from '../reducer'
import store from '../store'
import { Provider } from '../provider'

import { Todo } from '../type'

export default function App () {
  const [state, dispatch] = useReducer(reducer, store)

  const ref = useRef(null)

  const onAdd = () => {
    const id = state.number
    const content = ref.current.value
    if (!content) {
      return
    }
    ref.current.value = ''
    dispatch({
      type: 'AddTodo',
      payload: { content, id }
    })
    dispatch({ type: 'ChangeNumber', payload: id + 1 })
  }

  const onRemove = (id: number) => {
    dispatch({
      type: 'RemoveTodo',
      payload: state.todoList.filter((item: Todo) => item.id !== id)
    })
  }

  return (
    <Provider store={{ state, dispatch }}>
      <h1>Todo</h1>
      <button onClick={onAdd}>add</button>
      <input ref={ref}/>
      <TodoList todoList={ state.todoList } onRemove={onRemove}/>
      <Histotry />
      <Toaster />
    </Provider>
  )
}
