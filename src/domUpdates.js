import { searchResultsMsg, getAvailableRooms, filterBookings, matchIndividualRoom } from './newBookings';
import { matchUserBookedRooms, getPastBookings, getCurrentBookings } from './user-bookings';
import { newBookingNav, dashboardNav, dashboardView, newBookingsView, searchDates,results, resultsMsg, logInView, usernameInput, passwordInput, loginMsg, userMsg, currentBookingsContainer, navBox, pastBookingsContainer, totalSpent, filterButtons, individualBookingView, currentBookingsMsg, confirmationMsg, getAllData } from './scripts';
import { calculateSpending } from './calculations';
import { getDate, setMonth, setDay } from './get-dates';
import { postNewBooking, createPostData } from './apiCalls';
import { checkCredentials } from './login';

// SWITCHING VIEWS
const newBooking = () => {
  disablePreviousDates();
  searchDates.value = '';
  clearView([filterButtons, results, resultsMsg]);
  toggleHidden('add', [dashboardView, logInView, individualBookingView]);
  toggleHidden('remove', [newBookingsView]);
  dashboardNav.classList.remove('selected');
  newBookingNav.classList.add('selected');
}

const toDashboard = (allBookings, allRooms, currentUser) => {
  toggleHidden('remove', [dashboardView]);
  toggleHidden('add', [newBookingsView]);
  updateUserBookings(currentUser, allBookings, allRooms);
  dashboardNav.classList.add('selected');
  newBookingNav.classList.remove('selected');
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
    <img src="./images/${booking.roomType}.jpg" alt="image of hotel room" class="card-img">
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
    <img src="./images/${booking.room.roomType}.jpg" alt="image of hotel room" class="card-img">
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
    let rooms = getAvailableRooms(bookedRooms, allRooms);
      displayResultsText(searchResultsMsg(rooms));
      renderCards(rooms);
}

const displayResultsText = (text) => {
  resultsMsg.innerText = text;
}

const disablePreviousDates = () => {
  const today = new Date();
  const min = `${today.getFullYear()}-${setMonth(today)}-${setDay(today)}`;
  searchDates.setAttribute('min', min);
}

const renderFilterButtons = (e) => {
  clearView([filterButtons]);
  filterButtons.innerHTML += `
  <div class="filter-flex">
    <label for="filterButtons">Filter By Room Type:</label>
    <li tabIndex='0' class="clear-btn">Clear Filters</li>
    <li tabIndex='0' role="button" class="filter-btn ${e.target.id === 'singleroom' ? 'filter-selected' : ''}" id="singleroom">Single Room</li>
    <li tabIndex='0' role="button" class="filter-btn ${e.target.id === 'juniorsuite' ? 'filter-selected' : ''}"id="juniorsuite">Junior Suite</li>
    <li tabIndex='0' role="button" class="filter-btn ${e.target.id === 'residentialsuite' ? 'filter-selected' : ''}" id="residentialsuite">Residential Suite</li>
    <li tabIndex='0' role="button" class="filter-btn ${e.target.id === 'suite' ? 'filter-selected' : ''}" id="suite">Suite</li>
  </div>`
}

const searchBookingsHandler = (bookings, allRooms, currentUser, e) => {
  currentUser.searchDate = searchDates.value.replaceAll('-', '/');
  toggleHidden('add', [individualBookingView]);
  toggleHidden('remove', [results, resultsMsg]);

  if(currentUser.searchDate) {
    renderFilterButtons(e);
    let bookedRooms = filterBookings(bookings, currentUser.searchDate);
    renderBookings(bookedRooms, allRooms);
    return bookedRooms;
    } else {
    displayResultsText(searchResultsMsg());
  }
}

const filterByRoomType = (bookingResults, allRooms, type, currentUser, e) => {
  const bookings = searchBookingsHandler(bookingResults, allRooms, currentUser, e);
  const rooms = getAvailableRooms(bookings, allRooms);
  return rooms.filter((room) => {
    return room.roomType.split(' ').join('') === type.target.id;
  });
}

const renderFilteredResults = (e, allBookings, allRooms, currentUser) => {
  if(e.target.classList.contains('filter-btn')) {
    renderFilterButtons(e);
    let search = filterByRoomType(allBookings, allRooms, e, currentUser, e);
    clearView([results]);
    renderCards(search, allRooms);
  }
}

const clearFilters = (e, allBookings, allRooms, currentUser) => {
  if (e.target.classList.contains('clear-btn')) {
    searchBookingsHandler(allBookings, allRooms, currentUser, e);
  }
}

const renderIndividualBooking = (e, selectedRoom, message) => {
  toggleHidden('remove', [individualBookingView]);
  individualBookingView.show();
  clearView([individualBookingView]);

  individualBookingView.innerHTML += `
    <article class="individual-booking">
      <img class="single-img" src="./images/${selectedRoom.roomType}.jpg" alt="hotel room image">
      <div class="single-card-main-wrapper">
        <div class="small-img-wrapper"> 
          <img src="./images/room1.jpg" alt="brunch at hotel image" class="small-img">
          <img src="./images/room2.jpg" alt="hotel bathroom image" class="small-img">
        </div>
        <div class="single-card-text-wrapper">
          <p class="card-booking-text">YOU'RE BOOKING THE:</p>
          <p class="card-booking-text roomType">${selectedRoom.roomType[0].toUpperCase()}${selectedRoom.roomType.substring(1)} with ${selectedRoom.numBeds} ${selectedRoom.bedSize} sized beds</p>
          <p class="card-booking-text roomNumber">Room Number: ${selectedRoom.number}</p>
          <p class="card-booking-text roomCost" id="${selectedRoom.number}">Cost Per Night: $${selectedRoom.costPerNight}</p>
          <button class="reserve bookBtn ${e.target.classList[0] === 'reserve' ? 'hidden' : ''}" id="${selectedRoom.number}">Reserve Now</button>
          <p class="confirmation-message">${message ? message : ''}</p>
          <button class="close">Go Back</button>
        </div>
      </div>
    </article>`;
}

const bookNowHandler = (e, allRooms) => {
  if(e.target.className === 'bookBtn') {
    clearView([confirmationMsg, filterButtons]);
    toggleHidden('add', [results, resultsMsg]);
    toggleHidden('remove', [individualBookingView]);

    const selectedRoom = matchIndividualRoom(e.target.nextElementSibling.id, allRooms);
    renderIndividualBooking(e, selectedRoom[0]);
  };
}

const reserveNowHandler = (e, currentUser, allRooms) => {
  if (e.target.classList.contains('reserve')) {
    let data = createPostData(currentUser.id, currentUser.searchDate, e.target.previousElementSibling.id);

    postNewBooking(data).then((data) => {
      if (data.newBooking) {
        const selectedRoom = matchIndividualRoom(data.newBooking.roomNumber, allRooms)[0];
        const message = `Thank you for booking! Your confirmation number is ${data.newBooking.id}`;
        renderIndividualBooking(e, selectedRoom, message);
        getAllData();
      } else {
        confirmationMsg.innerText = data;
      };
    });
  };
}

const closeButtonHandler = (e, allBookings, allRooms, currentUser) => {
  if(e.target.classList.contains('close')) {
    individualBookingView.close();
    toggleHidden('remove', [results, resultsMsg]);
    renderFilterButtons(e);
    searchBookingsHandler(allBookings, allRooms, currentUser, e);
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

export { closeButtonHandler, newBooking, toDashboard, clearView, toggleHidden, displayResultsText, renderBookings, renderCards, searchBookingsHandler, renderFilteredResults, bookNowHandler, getDate,reserveNowHandler, checkLoginSuccess, updateUserBookings, checkInputValues, checkPassowrdMsg, checkLoginResults, loadDashboard, loginHandler, clearFilters }