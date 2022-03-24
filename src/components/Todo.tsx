import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../type'

export default function TodoList ({ todoList, onRemove }: { todoList: Todo[], onRemove: any}) {
  return (
    <div>
      {
        todoList.map((item) => <TodoItem key={item.id} todo={item} onRemove={() => onRemove(item.id)}/>)
      }
    </div>
  )
}
