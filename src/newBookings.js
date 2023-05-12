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

const getRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(res => res.json())
  .then(data => {
    console.log('all rooms in getRooms', data)
    return data;
  })
  .catch(err => console.log(err));
}

const getAvailableRooms = (bookedRooms, data) =>{
  bookedRooms.forEach((booking) => {
    for (let i=0; i< data.rooms.length; i++) {
      if (booking.roomNumber === data.rooms[i].number){
        data.rooms.splice(i, 1)
      }
    }
  })
  return data.rooms;
}


// const getAvailableRooms = (bookedRooms, data) =>{
//     const rooms = []
//     for (let booking of bookedRooms) {
//     let bookings = data.rooms.filter((room) => {
//       return booking.roomNumber !== room.number
//     })
//     bookings.forEach((booking) => {
//       rooms.push(booking)
//     })
//     console.log(bookings)
//     return rooms
//   }
// }


const matchRooms = (bookedRooms) => {
  return getRooms().then((data) => {
    return getAvailableRooms(bookedRooms, data)
  })
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

export {matchRooms, getBookings, searchResultsMsg, getRooms, filterBookings, getAvailableRooms}
