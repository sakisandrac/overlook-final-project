import { userLogins } from './data/userLogins'

const checkCredentials = (username, password) => {
  if(username && password) {
    matchUser(username, password)
    return 'valid username & password'
  } else {
    return 'Please enter both username and password!'
  }
}

const matchUser = (username, password) => {
  if (userLogins[username]) {
    matchPassword(password)
    return 'Valid username'
  } else {
    return 'Username not found'
  }
}

const matchPassword = (username, password) => {
  if (userLogins[username] === password) {
    return true;
  }
}

export { checkCredentials, matchPassword, matchUser }

