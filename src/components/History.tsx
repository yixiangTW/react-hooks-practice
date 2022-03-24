import React, { useContext } from 'react'
import { Context } from '../provider'

import { Todo } from '../type'

export default function History () {
  const { state } = useContext(Context)

  return <div>
    { state.historyTodos.length !== 0 ? <div data-testid='history-title'>history</div> : null}
    {
      state.historyTodos.map((item: Todo) => {
        return <div key={item.id}>todo id: {item.id} content: {item.content}</div>
      })
    }
  </div>
}
