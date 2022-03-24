import * as React from 'react'

type Props = {
  name: string
}

function Hello (props: Props) {
  return <h1>Hello, {props.name}!</h1>
}

export default Hello
