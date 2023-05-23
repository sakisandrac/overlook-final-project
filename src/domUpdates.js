import { searchResultsMsg, getAvailableRooms, filterBookings } from './newBookings'
import { getBookings, getRooms } from './apiCalls';
import {dashboardView, newBookingsView, searchDates,results, resultsMsg, logInView, usernameInput, passwordInput, loginMsg, userMsg} from './scripts'
import { checkCredentials } from './login';

// EVENT HANDLERS
const newBooking = () => {
  clearView(results);
  toggleHidden('add', [dashboardView, logInView]);
  toggleHidden('remove', [newBookingsView]);
}

const toDashboard = () => {
  toggleHidden('remove', [dashboardView]);
  toggleHidden('add', [newBookingsView]);
}

const checkPassowrdMsg = (loginResults) => {
  if(loginResults) {
    loginMsg.innerHTML = loginResults;
  } else {
    loginMsg.innerHTML = 'Incorrect Password'
  }
}

const loginSuccess = (loginResults, currentUser) => {
  if(loginResults !== 'Username not found' && loginResults !== undefined) {
    toggleHidden('add', [logInView]);
    toggleHidden('remove', [dashboardView]);
    console.log('login', currentUser)
    userMsg.innerHTML = `${currentUser.name} - Logout`
    } else {
      checkPassowrdMsg(loginResults);
  }
}

const loginHandler = (e, currentUser) => {
  e.preventDefault();
  let loginResults = checkCredentials(usernameInput.value, passwordInput.value);

  if(!usernameInput.value || !passwordInput.value) {
    loginMsg.innerHTML = 'Enter a Username and Password';
  } else {
    loginSuccess(loginResults, currentUser);
  }
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

const renderBookings = (data, allRooms) => {
  clearView(results);
    let res = getAvailableRooms(data, allRooms)
      displayResultsText(searchResultsMsg(res))
      renderCards(res);
  
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
const searchBookings = (bookings, allRooms) => {
  let date = searchDates.value.replaceAll('-', '/');
  if(date) {
    let data = filterBookings(bookings, date)
    console.log(data)
    renderBookings(data, allRooms);
    } else {
    displayResultsText(searchResultsMsg())
  }
}

export { newBooking, toDashboard, clearView, toggleHidden, displayResultsText, renderBookings, renderCards, searchBookings, loginHandler }