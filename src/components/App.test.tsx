import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'

// eslint-disable-next-line no-unused-vars
import userEvent from '@testing-library/user-event'

describe('App', () => {
  test('render title', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent('Todo')
  })

  test('click button', () => {
    // render(<App />)
    // userEvent.click(screen.getByTestId('click'))
    // expect(screen.getByTestId('description')).toHaveTextContent('current id is 1')
  })
})
