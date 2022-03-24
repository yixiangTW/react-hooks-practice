import * as React from 'react'
import TodoList from './Todo'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Todo } from '../type'
import { Provider } from '../provider'

describe('TodoList', () => {
  test('render todolist', () => {
    const todoList: Todo[] = [{ content: 'aaa', id: 0 }]
    render(
      <Provider store={{ store: {}, dispatch: jest.fn() }}>
        <TodoList todoList={todoList} onRemove={jest.fn()}/>
      </Provider>
    )
    expect(screen.getAllByTestId('list-item').length).toBe(1)
  })
})
