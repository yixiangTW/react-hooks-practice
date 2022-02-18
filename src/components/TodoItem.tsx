import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

import { Todo } from '../type'

export default function TodoItem ({ todo, onRemove }: { todo: Todo, onRemove: any }) {
  useEffect(() => {
    toast.success(`add todo id: ${todo.id}`)
    return () => {
      toast.error(`todo id: ${todo.id} removed`)
    }
  }, [todo])

  return <div>id: {todo.id} {todo.content}
    <button onClick={onRemove}>remove</button>
  </div>
}
