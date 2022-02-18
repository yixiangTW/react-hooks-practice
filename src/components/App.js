import React, { useRef, useReducer, useEffect, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';


import reducer from '../reducer'
import store from '../store'
import { Context, Provider } from '../provider'

const TodoItem = ({ todo }) => {
  
  const { state, dispatch } = useContext(Context);


  useEffect(() => {

    toast.success(`add todo id: ${todo.id}`)
    return () => {
      toast.error(`todo id: ${todo.id} removed`)
    }
  }, [todo])


  const onRemove = (id) => {
    dispatch({
      type: 'RemoveTodo',
      payload: state.todoList.filter(item => item.id !== id)
    })
  }

  return <div>id: {todo.id} {todo.content}
    <button onClick={() => onRemove(todo.id)}>remove</button>
  </div>
}

const Todo = ({ todoList }) => {
  return (
    <div>
      {
        todoList.map((item) => <TodoItem key={item.id} todo={item}/>)
      }
    </div>
    
  )
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, store)
  const ref = useRef(null)

  const onAdd = () => {
    const id = state.number
    const content = ref.current.value;
    if(!content) {
      return;
    }
    ref.current.value = '';
    dispatch({type: 'AddTodo', payload: {
      content,
      id
    }});
    dispatch({ type: 'ChangeNumber', payload: id + 1 })
  }

  return (
    <Provider store={{ state, dispatch }}>
      <button onClick={onAdd}>add</button>
      <input ref={ref}/>
      <Todo todoList={ state.todoList }/>
      <Toaster />
    </Provider>
  )
}