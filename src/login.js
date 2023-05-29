import { userLogins } from './data/userLogins'

const checkCredentials = (username, password) => {
  if(username && password) {
    return matchUser(username, password)
  } else {
    return 'Please enter both username and password!'
  }
}

const matchUser = (username, password) => {
  if (userLogins[username]) {
  return matchPassword(username, password)
  } else {
    return 'Username not found'
  }
}

const matchPassword = (username, password) => {
  if (password === userLogins[username].password) {
    return true;
  } 
}

const getUserId = (username) => {
  return userLogins[username].id;
}

export { checkCredentials, matchPassword, matchUser, getUserId }

