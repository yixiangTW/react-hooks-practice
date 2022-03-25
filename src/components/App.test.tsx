import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  test('render title', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent('Todo')
  })
})
