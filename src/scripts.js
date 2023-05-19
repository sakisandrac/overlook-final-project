// IMPORT
import './css/styles.css';
import {matchRooms, searchResultsMsg, getBookings, getRooms} from './newBookings'

// DOM
const newBookingNav = document.querySelector('#newBooking');
const dashboardNav = document.querySelector('#dashboardNav');
const dashboardView = document.querySelector('#dashboardView');
const newBookingsView = document.querySelector('#newBookingsView');
const searchDates = document.querySelector('#searchDates');
const searchBtn =  document.querySelector('#searchBtn');
const results = document.querySelector('#results');
const resultsMsg = document.querySelector('#resultsMsg');

// EVENT HANDLERS
const newBooking = () => {
  clearView(results);
  toggleHidden('add', [dashboardView]);
  toggleHidden('remove', [newBookingsView]);
}

const toDashboard = () => {
  toggleHidden('remove', [dashboardView]);
  toggleHidden('add', [newBookingsView]);
}

// DOM FUNCTIONS
const clearView = (view) => {
  view.innerHTML = '';
}

const toggleHidden = (type, views) => {
  views.forEach((view) => {
    view.classList[type]('hidden');
  })
}

const displayResultsText = (text) => {
  resultsMsg.innerText = text
}

const renderBookings = (dates) => {
  clearView(results);
  // console.log('dates in renderBookings', dates)
  getRooms().then((allRooms) => {
    matchRooms(dates, allRooms).then((res) => {
      console.log('this is the data', res)
      displayResultsText(searchResultsMsg(res))
      renderCards(res);
    })
  })
}

const renderCards = (bookings) => {
  bookings.forEach((booking) => {
    results.innerHTML += `<article class="card">
    <img src="./images/${booking.roomType}.jpg" class="card-img">
    <div class="card-text-wrapper">
      <p class="card-booking-text">Room Number: ${booking.number}</p>
      <p class="card-booking-text">Cost: $${booking.costPerNight}</p>
      <p class="card-booking-text">Room Type: ${booking.roomType}</p>
      <p class="card-booking-text">Beds: ${booking.numBeds} ${booking.bedSize} sized bed</p>
      <button class="bookBtn">Book Now!</button>
    </div>
  </article>` 
  })
}

const searchBookings = () => {
  let date = searchDates.value.replaceAll('-', '/');
  if(date) {
    getBookings(date).then((data) => {
      // console.log('getbookingsdata', data)
    renderBookings(data);
    })
  } else {
    displayResultsText(searchResultsMsg())
  }
}

// EVENT LISTENERS
newBookingNav.addEventListener('click', newBooking);
dashboardNav.addEventListener('click', toDashboard);
searchBtn.addEventListener('click', searchBookings);

export {clearView, displayResultsText}





