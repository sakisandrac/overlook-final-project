// IMPORT
import './css/styles.css';
import './images/user.png'
import './images/home.png'
import './images/heart-logo.png'
import './images/search.png'
import './images/room1.jpg'

const getBookings = () => {
  fetch('http://localhost:3001/api/v1/bookings')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))
}

getBookings();

const getRooms = () => {
  fetch('http://localhost:3001/api/v1/rooms')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))
}

getRooms()