import reducer from './reducer'
import { StoreType } from './type'
let state: StoreType = {
  number: 0,
  todoList: [],
  historyTodos: []
}

beforeEach(() => {
  state = {
    number: 0,
    todoList: [],
    historyTodos: []
  }
})

describe('test reducer function', () => {
  test('should return initial state', () => {
    state = reducer(state, {})
    expect(state).toEqual(state)
  })

  test('test add todo', () => {
    state = reducer(state, { type: 'AddTodo', payload: { content: 'aaa', number: 0 } })
    expect(state).toEqual({
      number: 0,
      todoList: [{ content: 'aaa', number: 0 }],
      historyTodos: []
    })
  })

  test('test change number', () => {
    state = reducer(state, { type: 'ChangeNumber', payload: 3 })
    expect(state).toEqual({
      number: 3,
      todoList: [],
      historyTodos: []
    })
  })
})
