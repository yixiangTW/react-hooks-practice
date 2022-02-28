import { validate } from '../user'

jest.mock('../verify.ts') // manual mock 需要自己创建module

describe('test mock module', () => {
  test('', () => {
    const result = validate('username', 'password')
    expect(result).toBe(true)
  })
})
