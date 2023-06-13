const userLogins = (num) => {
  if (num) {
    return {
      [`customer${num}`]: {
        username: `customer${num}`,
        password: 'overlook2021'
      },
    }
  }
}

const checkCredentials = (username, password) => {
  if(username && password) {
    return matchUser(username, password);
  } else {
    return 'Please enter both username and password!';
  };
}

const matchUser = (username, password) => {
  const customerId = getUserId(username);

  if (customerId > 1 && customerId <= 50) {
  return matchPassword(customerId, password);
  } else {
    return 'Username not found';
  };
}

const matchPassword = (id, password) => {
  if (password === userLogins(id)[`customer${id}`].password) {
    return true;
  };
}

const getUserId = (username) => {
  if (username) {
    return parseInt(username.split('customer')[1]);
  }
}

export { checkCredentials, matchPassword, matchUser, getUserId, userLogins }

