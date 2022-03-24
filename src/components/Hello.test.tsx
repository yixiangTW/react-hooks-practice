import * as React from 'react'
import Hello from './Hello'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('render Hello', () => {
  const name = 'World'
  render(<Hello name={name}/>)
  expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument()
  // toBeInTheDocument 是 jest-dom 的库提供的
})
