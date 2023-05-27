import { searchResultsMsg, getAvailableRooms, filterBookings,  } from './newBookings'
import {matchUserBookedRooms} from './user-bookings'
import {dashboardView, newBookingsView, searchDates,results, resultsMsg, logInView, usernameInput, passwordInput, loginMsg, userMsg, currentBookingsContainer, navBox, pastBookingsContainer, totalSpent, filterButtons, individualBookingView, singleImg, roomNumber, roomType, roomCost, roomBeds } from './scripts';
import { checkCredentials } from './login';
import { calculateSpending } from './calculations';
import { getCustomerInfo } from './apiCalls';

// SWITCHING VIEWS
const newBooking = () => {
  searchDates.value = '';
  clearView([results, resultsMsg]);
  toggleHidden('add', [dashboardView, logInView, filterButtons, individualBookingView]);
  toggleHidden('remove', [newBookingsView]);
}

const toDashboard = () => {
  toggleHidden('remove', [dashboardView]);
  toggleHidden('add', [newBookingsView]);
}

// LOGIN PAGE
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
    toggleHidden('remove', [dashboardView, navBox]);
    userMsg.innerHTML = `${currentUser.name}`
    } else {
      checkPassowrdMsg(loginResults);
  }
}

const loginHandler = (e, currentUser, allBookings, allRooms) => {
  e.preventDefault();
  let loginResults = checkCredentials(usernameInput.value, passwordInput.value);

  if(!usernameInput.value || !passwordInput.value) {
    loginMsg.innerHTML = 'Enter a Username and Password';
  } else {
    loginSuccess(loginResults, currentUser);
    renderUserBookings(currentUser, allBookings, allRooms);
    totalSpent.innerHTML = `Total Spent on Bookings: $${calculateSpending(currentUser.userBookings)}`;
  }
}

// DASHBOARD 
const renderCards = (bookings) => {
  bookings.forEach((booking) => {
    results.innerHTML += `<article class="card">
    <img src="./images/${booking.roomType}.jpg" class="card-img">
    <div class="card-text-wrapper">
      <button class="bookBtn">Book Now!</button>
      <p class="card-booking-text" id="${booking.number}">Room Number: ${booking.number}</p>
      <p class="card-booking-text">Cost: $${booking.costPerNight}</p>
      <p class="card-booking-text">Room Type: ${booking.roomType}</p>
      <p class="card-booking-text">Beds: ${booking.numBeds} ${booking.bedSize} sized bed</p>
    </div>
  </article>` 
  })
}

const renderUserBookings = (currentUser, allBookings, allRooms) => {
  currentUser.userBookings = matchUserBookedRooms(currentUser, allBookings, allRooms)
  //sort bookings by date?
  currentUser.userBookings.forEach((booking) => {
    pastBookingsContainer.innerHTML += `<article class="card">
    <img src="./images/${booking.room.roomType}.jpg" class="card-img">
    <div class="card-text-wrapper">
      <p class="card-booking-text">Room Number: ${booking.room.number}</p>
      <p class="card-booking-text">Cost: $${booking.room.costPerNight}</p>
      <p class="card-booking-text">Date: ${booking.booking}</p>

    </div>
  </article>` 
  })
}

// BOOKINGS PAGE
const renderBookings = (bookedRooms, allRooms) => {
  clearView([results]);
    let res = getAvailableRooms(bookedRooms, allRooms)
      displayResultsText(searchResultsMsg(res))
      renderCards(res);
}

const displayResultsText = (text) => {
  resultsMsg.innerText = text
}

const searchBookings = (bookings, allRooms, currentUser) => {
  currentUser.searchDate = searchDates.value.replaceAll('-', '/');
  toggleHidden('add', [individualBookingView]);
  if(currentUser.searchDate ) {
    toggleHidden('remove', [filterButtons]);
    let bookedRooms = filterBookings(bookings, currentUser.searchDate);
    renderBookings(bookedRooms, allRooms);
    return bookedRooms;
    } else {
    displayResultsText(searchResultsMsg());
  }
}

const filterByRoomType = (bookingResults, allRooms, type) => {
  const bookings = searchBookings(bookingResults, allRooms);
  const rooms= getAvailableRooms(bookings, allRooms);
  return rooms.filter((room) => {
    return room.roomType.split(' ').join('') === type;
  });
}

const renderFilteredResults = (e, allBookings, allRooms) => {
  let search = filterByRoomType(allBookings, allRooms, e.target.id)
  clearView([results]);
  renderCards(search, allRooms);
}

const renderIndividualBooking = (selectedRoom) => {
  // console.log(selectedRoom)
  toggleHidden('remove', [individualBookingView])
  singleImg.src = `./images/${selectedRoom.roomType}.jpg`;
  roomNumber.innerText = `Room Number: ${selectedRoom.number}`;
  roomType.innerText = `${selectedRoom.roomType[0].toUpperCase()}${selectedRoom.roomType.substring(1)} with ${selectedRoom.numBeds} ${selectedRoom.bedSize} sized beds`;
  roomCost.innerText = `Cost Per Night: $${selectedRoom.costPerNight}`;
  roomCost.setAttribute('id', `${selectedRoom.number}`);
}

const bookNowHandler = (e, allRooms) => {
  if(e.target.className === 'bookBtn') {
    clearView([results, resultsMsg]);
    toggleHidden('add', [filterButtons])
    toggleHidden('remove', [individualBookingView]);
    let selectedRoom = allRooms.rooms.filter((room)=> {
      return room.number === parseInt(e.target.nextElementSibling.id);
    });
    renderIndividualBooking(selectedRoom[0]);
  }
}

// DOM FUNCTIONS
const clearView = (views) => {
  views.forEach((view) => {
    view.innerHTML = '';
  })
}

const toggleHidden = (type, views) => {
  views.forEach((view) => {
    view.classList[type]('hidden');
  })
}

export { newBooking, toDashboard, clearView, toggleHidden, displayResultsText, renderBookings, renderCards, searchBookings, loginHandler, renderFilteredResults, bookNowHandler }