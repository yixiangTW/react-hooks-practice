import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'

// eslint-disable-next-line no-unused-vars
import userEvent from '@testing-library/user-event'

// i don't now why ?
Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {}
    }
  }
})

describe('App', () => {
  test('render title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Todo')
  })

  test('click button', () => {
    render(<App />)
    const inputElement = screen.getByRole('textbox')
    userEvent.clear(inputElement)
    userEvent.type(inputElement, 'Hello, World!')
    expect(inputElement).toHaveValue('Hello, World!')
    userEvent.click(screen.getByTestId('click'))
    expect(screen.getByTestId('description')).toHaveTextContent('current id is 1')
  })
})
