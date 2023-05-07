// IMPORT
import './css/styles.css';
import './images/user.png';
import './images/home.png';
import './images/heart-logo.png';
import './images/search.png';
import './images/room1.jpg';

const getBookings = (searchDate) => {
  fetch('http://localhost:3001/api/v1/bookings')
  .then(res => res.json())
  .then(data => {
    let dates = data.bookings.filter((booking) => {
      return booking.date === searchDate;
    })
    if(dates.length !== 0) {
    console.log(dates)
    renderBookings(dates);
    } else {
      console.log('No bookings found');
    }
  })
  .catch(err => console.log(err));
}

getBookings('2022/02/20');


const getRooms = () => {
  fetch('http://localhost:3001/api/v1/rooms')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
}

getRooms()

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
  getBookings(date);
}

const matchRooms = (rooms, booking) => {
  return rooms.filter((room) => {
    booking.forEach((book) => {
      
    })
  })
}
const renderBookings = (data) => {
  data.forEach((booking) => {
  results.innerHTML = `<h2>${booking.roomNumber}</h2>`
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