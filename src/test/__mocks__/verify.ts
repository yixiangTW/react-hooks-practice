const verifyPassword = jest.fn().mockImplementation(() => { return true })
const verifyUsername = jest.fn().mockImplementation(() => { return true })

export { verifyPassword, verifyUsername }
