import { fetchUserProfile } from '../fetch'

jest.mock('axios')

describe('mock node module', () => {
  test('', async () => {
    await expect(fetchUserProfile()).resolves.toEqual({ name: 'NANA' })
  })
})
