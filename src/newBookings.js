// IMPORT
import './images/user.png';
import './images/home.png';
import './images/heart-logo.png';
import './images/search.png';
import './images/single room.jpg';
import './images/suite.jpg';
import './images/residential suite.jpg';
import './images/junior suite.jpg';

// FUNCTIONS
const filterBookings = (data, searchDate) => {
    return data.bookings.filter((booking) => {
      return booking.date === searchDate;
    })
}

const getBookings = (searchDate) => {
  return fetch('http://localhost:3001/api/v1/bookings')
  .then(res => res.json())
  .then(data => {
    return filterBookings(data, searchDate)
  })
  .catch(err => console.log(err));
}

// // getBookings('2022/02/20');

const getRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(res => res.json())
  .then(data => {
    console.log('all rooms in getRooms', data)
    return data;
  })
  .catch(err => console.log(err));
}


const matchRooms = (bookedRooms) => {
  let availableRooms = getRooms().then((res) => {
    bookedRooms.forEach((booking) => {
      for (let i=0; i< res.rooms.length; i++) {
        if (booking.roomNumber === res.rooms[i].number){
          res.rooms.splice(i, 1)
        }
      }
    })
    return res.rooms;
  })
  console.log(availableRooms)
  return availableRooms;
}

const searchResultsMsg = (results) => {
  if(!results) {
    return 'Enter a valid date!'
  } else if (results.length > 0){
    return `There are ${results.length} rooms available:`
  } else {
    return 'We are so sorry! There are no rooms avaiable for this date, please select a different date.'
  }
} 

export {matchRooms, getBookings, searchResultsMsg, getRooms}
