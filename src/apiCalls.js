import { filterBookings } from "./newBookings";

// const getBookings = (searchDate) => {
//   return fetch('http://localhost:3001/api/v1/bookings')
//   .then(res => res.json())
//   .then(data => {
//     return filterBookings(data, searchDate)
//     // return data;
//   })
//   .catch(err => console.log(err));
// }


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
    console.log(data)
    return data
  })
}

export { getBookings, getRooms, getCustomerInfo }