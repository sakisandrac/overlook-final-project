import { searchResultsMsg, getAvailableRooms, filterBookings } from './newBookings';
import { matchUserBookedRooms, getPastBookings, getCurrentBookings } from './user-bookings';
import { dashboardView, newBookingsView, searchDates,results, resultsMsg, logInView, usernameInput, passwordInput, loginMsg, userMsg, currentBookingsContainer, navBox, pastBookingsContainer, totalSpent, filterButtons, individualBookingView, singleImg, roomNumber, roomType, roomCost, currentBookingsMsg, confirmationMsg, getAllData } from './scripts';
import { calculateSpending } from './calculations';
import { getDate } from './get-dates';
import { postNewBooking, createPostData } from './apiCalls';
import { checkCredentials } from './login';

// SWITCHING VIEWS
const newBooking = () => {
  searchDates.value = '';
  clearView([results, resultsMsg]);
  toggleHidden('add', [dashboardView, logInView, filterButtons, individualBookingView]);
  toggleHidden('remove', [newBookingsView]);
}

const toDashboard = (allBookings, allRooms, currentUser) => {
  toggleHidden('remove', [dashboardView]);
  toggleHidden('add', [newBookingsView]);
  updateUserBookings(currentUser, allBookings, allRooms);
}

// LOGIN PAGE
const loginHandler = () => {
  let loginResults = checkCredentials(usernameInput.value, passwordInput.value);

  if (!checkInputValues() && checkLoginResults(loginResults)) {
    getAllData(loginResults);
  } else {
    checkPassowrdMsg(loginResults);
  };
}

const checkInputValues = () => {
  if(!usernameInput.value || !passwordInput.value) {
    loginMsg.innerHTML = 'Enter a Username and Password';
    return true;
  }
}

const checkPassowrdMsg = (loginResults) => {
  if(loginResults) {
    loginMsg.innerHTML = loginResults;
  } else {
    loginMsg.innerHTML = 'Incorrect Password';
  }
}
const checkLoginResults = (loginResults) => {
  if(loginResults !== 'Username not found' && loginResults !== undefined) {
    return true;
  }
}

const checkLoginSuccess = (loginResults, currentUser) => {
  if(checkLoginResults(loginResults)) {
    toggleHidden('add', [logInView]);
    toggleHidden('remove', [dashboardView, navBox]);
    userMsg.innerHTML = `${currentUser.name}`;
  };
}

const updateUserBookings = (currentUser, allBookings, allRooms) => {
  currentUser.userBookings = matchUserBookedRooms(currentUser, allBookings, allRooms);
  renderDashboardBookings(currentUser);
  renderCost(currentUser);
}

// DASHBOARD 
const loadDashboard = (loginResults, currentUser, allBookings, allRooms) => {
  if(loginResults) {
    checkLoginSuccess(loginResults, currentUser);
    updateUserBookings(currentUser, allBookings, allRooms);
  };
}

const renderCost = (currentUser) => {
  clearView([totalSpent]);
  totalSpent.innerHTML = `Total Spent on Bookings: $${calculateSpending(currentUser.userBookings)}`;
}

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
  });
}

const renderUserBookings = (bookings, view) => {
  bookings.forEach((booking) => {
    view.innerHTML += `<article class="card">
    <img src="./images/${booking.room.roomType}.jpg" class="card-img">
    <div class="card-text-wrapper">
      <p class="card-booking-text">Room Number: ${booking.room.number}</p>
      <p class="card-booking-text">Cost: $${booking.room.costPerNight}</p>
      <p class="card-booking-text">Date: ${booking.booking}</p>
    </div>
  </article>` 
  });
}

const checkCurrentBookings = (userCurrentBookings, currentBookingsContainer, currentUser) => {
  if(Array.isArray(userCurrentBookings)) {
    renderUserBookings(userCurrentBookings, currentBookingsContainer);
  } else {
    currentBookingsMsg.innerText = getCurrentBookings(currentUser);
  };
}

const renderDashboardBookings = (currentUser) => {
  clearView([currentBookingsContainer, pastBookingsContainer]);

  const dateToday = new Date();
  const userCurrentBookings = getCurrentBookings(currentUser, getDate(dateToday));
  const userPastBookings = getPastBookings(currentUser, getDate(dateToday));

  renderUserBookings(userPastBookings, pastBookingsContainer);
  checkCurrentBookings(userCurrentBookings, currentBookingsContainer, currentUser);
}

// BOOKINGS PAGE
const renderBookings = (bookedRooms, allRooms) => {
  clearView([results]);
    let res = getAvailableRooms(bookedRooms, allRooms)
      displayResultsText(searchResultsMsg(res))
      renderCards(res);
}

const displayResultsText = (text) => {
  resultsMsg.innerText = text;
}

const searchBookingsHandler = (bookings, allRooms, currentUser) => {
  currentUser.searchDate = searchDates.value.replaceAll('-', '/');
  toggleHidden('add', [individualBookingView]);

  if(currentUser.searchDate) {
    toggleHidden('remove', [filterButtons]);
    let bookedRooms = filterBookings(bookings, currentUser.searchDate);
    renderBookings(bookedRooms, allRooms);
    return bookedRooms;
    } else {
    displayResultsText(searchResultsMsg());
  }
}

const filterByRoomType = (bookingResults, allRooms, type, currentUser) => {
  const bookings = searchBookingsHandler(bookingResults, allRooms, currentUser);
  const rooms = getAvailableRooms(bookings, allRooms);
  return rooms.filter((room) => {
    return room.roomType.split(' ').join('') === type;
  });
}

const renderFilteredResults = (e, allBookings, allRooms, currentUser) => {
  if(e.target.classList.contains('filter-btn')) {
    let search = filterByRoomType(allBookings, allRooms, e.target.id, currentUser)
    clearView([results]);
    renderCards(search, allRooms);
  }
}

const renderIndividualBooking = (selectedRoom) => {
  toggleHidden('remove', [individualBookingView])
  singleImg.src = `./images/${selectedRoom.roomType}.jpg`;
  roomNumber.innerText = `Room Number: ${selectedRoom.number}`;
  roomType.innerText = `${selectedRoom.roomType[0].toUpperCase()}${selectedRoom.roomType.substring(1)} with ${selectedRoom.numBeds} ${selectedRoom.bedSize} sized beds`;
  roomCost.innerText = `Cost Per Night: $${selectedRoom.costPerNight}`;
  roomCost.setAttribute('id', `${selectedRoom.number}`);
}

const bookNowHandler = (e, allRooms) => {
  if(e.target.className === 'bookBtn') {
    clearView([results, resultsMsg, confirmationMsg]);
    toggleHidden('add', [filterButtons]);
    toggleHidden('remove', [individualBookingView]);
    let selectedRoom = allRooms.rooms.filter((room) => {
      return room.number === parseInt(e.target.nextElementSibling.id);
    });
    renderIndividualBooking(selectedRoom[0]);
  }
}

const reserveNowHandler = (e, currentUser) => {
  let data = createPostData(currentUser.id, currentUser.searchDate, e.target.previousElementSibling.id);

  postNewBooking(data).then((data) => {
    if(data.newBooking) {
      confirmationMsg.innerText = `Thank you for booking! Your confirmation number is ${data.newBooking.id}`
      getAllData();
    } else {
      confirmationMsg.innerText = data;
    }
  });
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

export { newBooking, toDashboard, clearView, toggleHidden, displayResultsText, renderBookings, renderCards, searchBookingsHandler, renderFilteredResults, bookNowHandler, getDate,reserveNowHandler, checkLoginSuccess, updateUserBookings, checkInputValues, checkPassowrdMsg, checkLoginResults, loadDashboard, loginHandler }