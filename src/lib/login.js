import storage from './storage'
const userKey = 'user'

async function getUser() {
  return await storage.getJSON(userKey) || {}
}

async function setUser(value) {
  await storage.set(userKey, value)
}

async function logout() {
  await setUser(undefined)
}

async function isLogged(){
  const user = await getUser()
  return user && user.token
}

export {
  getUser,
  setUser,
  logout,
  isLogged
}