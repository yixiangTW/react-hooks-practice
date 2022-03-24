import * as React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('App', () => {
  test('render title', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent('Todo')
  })
})
