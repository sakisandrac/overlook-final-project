const getBookings = () => {
  return fetch('https://overlook-api-nu.vercel.app/api/v1/bookings')
  .then(res => res.json())
  .catch((err) => {
    console.log(err)
    return document.querySelector('#errorMsg').innerText = `Error please try refreshing page (${err})`;
  });
}

const getRooms = () => {
  return fetch('https://overlook-api-nu.vercel.app/api/v1/rooms')
  .then(res => res.json())
  .catch((err) => {
    console.log(err)
    return document.querySelector('#errorMsg').innerText = `Error please try refreshing page (${err})`;
  });
}

const getCustomerInfo = (id) => {
  return fetch(`https://overlook-api-nu.vercel.app/api/v1/customers/${id}`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((err) => {
    console.log(err)
    return document.querySelector('#errorMsg').innerText = `Error please try refreshing page (${err})`;
  });
}

const createPostData = (userID, date, roomNumber) => {
  return { 
    userID,
    date,
    roomNumber: parseInt(roomNumber)
  }
}

const postNewBooking = (data) => {
  return fetch('https://overlook-api-nu.vercel.app/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => {
      console.log(err);
      return document.querySelector('#errorMsg').innerText = `Error please try refreshing page (${err})`;
    });
}



export { getBookings, getRooms, getCustomerInfo, createPostData, postNewBooking }