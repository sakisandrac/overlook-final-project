// IMPORT
import './css/styles.css';
import './images/user.png';
import './images/home.png';
import './images/heart-logo.png';
import './images/search.png';
import './images/single room.jpg';
import './images/suite.jpg';
import './images/residential suite.jpg';
import './images/junior suite.jpg';

const getBookings = (searchDate) => {
  fetch('http://localhost:3001/api/v1/bookings')
  .then(res => res.json())
  .then(data => {
    let dates = data.bookings.filter((booking) => {
      return booking.date === searchDate;
    })
    renderBookings(dates);
  })
  .catch(err => console.log(err));
}

// getBookings('2022/02/20');

const getRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(res => res.json())
  .then(data => {
    console.log('all rooms in getRooms', data)
    return data;
  })
  .catch(err => console.log(err));
}


const getCustomers = () => {
  fetch('http://localhost:3001/api/v1/customers')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
}

// DOM
const newBookingNav = document.querySelector('#newBooking');
const dashboardNav = document.querySelector('#dashboardNav');
const dashboardView = document.querySelector('#dashboardView');
const newBookingsView = document.querySelector('#newBookingsView');
const searchDates = document.querySelector('#searchDates');
const searchBtn =  document.querySelector('#searchBtn');
const results = document.querySelector('#results');

// EVENT HANDLERS
const newBooking = () => {
  toggleHidden('add', [dashboardView]);
  toggleHidden('remove', [newBookingsView]);
}

const toDashboard = () => {
  toggleHidden('remove', [dashboardView]);
  toggleHidden('add', [newBookingsView]);
}

const searchBookings = () => {
  let date = searchDates.value.replaceAll('-', '/');
  if(date) {
    getBookings(date);
  } else {
    results.innerHTML = `<h2>Please select a date to search!</h2>`
  }
}

const matchRooms = (bookedRooms) => {
  // let availableRooms = []
  let availableRooms = getRooms().then((res) => {
    bookedRooms.forEach((booking) => {
      for (let i=0; i< res.rooms.length; i++) {
        if (booking.roomNumber === res.rooms[i].number){
          res.rooms.splice(i, 1)
        }
      }
    })
    //DELETE BELOW
    // res.rooms.forEach((room) => {
    //   availableRooms.push(room)
    // })
    // console.log('available here', availableRooms)
    // let newRooms = [...availableRooms]
    // console.log('new', newRooms)
    // return newRooms
    return res.rooms;
  })
  // console.log('here in matchRooms', availableRooms)
  console.log(availableRooms)
  return availableRooms;
  // return availableRooms
}

const renderBookings = (dates) => {
    results.innerHTML = '';
    console.log('dates in renderBookings', dates)
    matchRooms(dates).then((res) => {
      console.log('in renderBookings - avail rooms', res)
      res.forEach((booking) => {

        results.innerHTML += `<article class="card">
        <img src="./images/${booking.roomType}.jpg" class="card-img">
        <div class="card-text-wrapper">
          <p class="card-booking-text">Room Number: ${booking.number}</p>
          <p class="card-booking-text">Cost: $${booking.costPerNight
          }</p>
          <p class="card-booking-text">Room Type: ${booking.roomType}</p>
          <p class="card-booking-text">Beds: ${booking.numBeds} ${booking.bedSize} sized bed</p>
        </div>
      </article>` 
      })
      
    })
}

// EVENT LISTENERS
newBookingNav.addEventListener('click', newBooking);
dashboardNav.addEventListener('click', toDashboard);
searchBtn.addEventListener('click', searchBookings)

//FUNCTIONS
const toggleHidden= (type, views) => {
  views.forEach((view) => {
    view.classList[type]('hidden')
  })
}