import React from 'react'
import History from './History'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Todo } from '../type'
import { Provider } from '../provider'

describe('History', () => {
  test('render history', () => {
    const mockHistoryTodos: Todo[] = [
      {
        id: 0,
        content: 'aaa'
      },
      {
        id: 1,
        content: 'bbb'
      },
      {
        id: 2,
        content: 'ccc'
      }
    ]
    render(
      <Provider store={{ state: { historyTodos: mockHistoryTodos }, dispatch: jest.fn() }}>
        <History/>
      </Provider>
    )
    expect(screen.getByText('history')).toBeInTheDocument()
  })

  test('render history', () => {
    const mockHistoryTodos: Todo[] = []
    render(
      <Provider store={{ state: { historyTodos: mockHistoryTodos }, dispatch: jest.fn() }}>
        <History/>
      </Provider>
    )
    expect(screen.queryByTestId('history-title')).toBeNull()
  })
})
