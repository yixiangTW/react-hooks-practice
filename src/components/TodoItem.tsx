import React, { useEffect, useContext } from 'react'
import toast from 'react-hot-toast'

import { Context } from '../provider'
import { Todo } from '../type'

export default function TodoItem ({ todo, onRemove }: { todo: Todo, onRemove: any }) {
  const { dispatch } = useContext(Context)

  useEffect(() => {
    toast.success(`add todo id: ${todo.id}`)
    return () => {
      console.log(todo)
      dispatch({
        type: 'AddHistory',
        payload: todo
      })
      toast.error(`todo id: ${todo.id} removed`)
    }
  }, [todo])

  return <div data-testid='list-item'>id: {todo.id} {todo.content}
    <button onClick={onRemove}>remove</button>
  </div>
}
