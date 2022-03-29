import React, { useRef, useReducer } from 'react'
import { Toaster } from 'react-hot-toast'

import TodoList from './Todo'
import Histotry from './History'

import reducer from '../reducer'
import store from '../store'
import { Provider } from '../provider'

import { Todo } from '../type'
import style from './App.css'

export default function App () {
  const [state, dispatch] = useReducer(reducer, store)

  const ref = useRef(null)

  const onAdd = () => {
    const id = state.number
    const content = ref.current.value ? ref.current.value : 'null'
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
      <h1 className={style.title}>Todo</h1>
      <pre data-testid='description'>current id is { state.number }</pre>
      <button data-testid='click' onClick={onAdd} className={style.button}>add</button>
      <input type='text' ref={ref}/>
      <TodoList todoList={ state.todoList } onRemove={onRemove}/>
      <Histotry />
      <Toaster />
    </Provider>
  )
}
