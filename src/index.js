import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';

if(process.env.NODE_ENV !== 'production') {
  console.log('in development mode')
}

ReactDOM.render(<App />, document.getElementById('root'))