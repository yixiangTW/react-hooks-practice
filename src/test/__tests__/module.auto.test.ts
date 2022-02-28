import { validate } from '../user'
import { verifyUsername, verifyPassword } from '../verify'

jest.mock('../verify') // auto mock module 不需要手动创建__mocks__/example.ts

describe('auto mock module', () => {
  test('', () => {
    // @ts-ignore
    verifyPassword.mockReturnValueOnce(false)
    // @ts-ignore
    verifyUsername.mockReturnValueOnce(true)
    const result = validate('username', 'aaa')
    expect(result).toBe(false)
  })
})
