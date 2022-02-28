import { verifyPassword, verifyUsername } from './verify'

function validate (username: string, password: string) {
  return verifyPassword(password) && verifyUsername(username)
}

export { validate }
