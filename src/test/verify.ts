const verifyPassword = (password: string) => {
  if (password.indexOf('aaa') !== -1) {
    return true
  }
  return false
}

const verifyUsername = (username: string) => {
  if (username) {
    return true
  }
  return false
}

export { verifyPassword, verifyUsername }
