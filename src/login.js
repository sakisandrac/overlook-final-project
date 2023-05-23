import { userLogins } from './data/userLogins'

const checkCredentials = (username, password) => {
  if(username && password) {
    // if(matchUser(username, password))
    return matchUser(username, password)
  } else {
    return 'Please enter both username and password!'
  }
}

const matchUser = (username, password) => {
  console.log(username, password)
  if (userLogins[username]) {
   console.log('matchuser', matchPassword(username, password))
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

export { checkCredentials, matchPassword, matchUser }

