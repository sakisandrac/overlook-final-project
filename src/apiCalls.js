const getBookings = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
  .then(res => res.json())
  .then(data => {
    return data
  })
  .catch(err => console.log(err));
}

const getRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(res => res.json())
  .then(data => {
    return data;
  })
  .catch(err => console.log(err));
}

const getCustomerInfo = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
  .then((res) => {
    return res.json()
  })
  .then((data) =>{
    return data;
  })
  .catch(err => console.log(err));
}

const createPostData = (userID, date, roomNumber) => {
  return { 
    userID,
    date,
    roomNumber: parseInt(roomNumber)
  }
}

const postNewBooking = (data) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err)
      return err;
    });
  
}



export { getBookings, getRooms, getCustomerInfo, createPostData, postNewBooking }