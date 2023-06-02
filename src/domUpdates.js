import { searchResultsMsg, getAvailableRooms, filterBookings } from './newBookings';
import { matchUserBookedRooms, getPastBookings, getCurrentBookings } from './user-bookings';
import { dashboardView, newBookingsView, searchDates,results, resultsMsg, logInView, usernameInput, passwordInput, loginMsg, userMsg, currentBookingsContainer, navBox, pastBookingsContainer, totalSpent, filterButtons, individualBookingView, singleImg, roomNumber, roomType, roomCost, currentBookingsMsg, confirmationMsg, loginSuccess} from './scripts';
import { checkCredentials, getUserId } from './login';
import { calculateSpending } from './calculations';
import { getDate } from './get-dates';
import { getCustomerInfo, postNewBooking, createPostData } from './apiCalls';

// GLOBAL VARIABLES
// let currentUser;
// console.log(allBookings, allRooms)



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
  getCustomerInfo(getUserId(usernameInput.value)).then((data) => {
    currentUser = data;
    console.log('toDashboard', data)
    updateUserBookings(currentUser, allBookings, allRooms);
  })
}
//potentially could work: refactor so that the data is called upon user login, NOT page load. user login, check user login-> if success, then also call to Dashboard where the promise all is stored.

// LOGIN PAGE
const checkPassowrdMsg = (loginResults) => {
  if(loginResults) {
    loginMsg.innerHTML = loginResults;
  } else {
    loginMsg.innerHTML = 'Incorrect Password';
  }
}

const checkLogin = (loginResults, currentUser) => {
  if(loginResults !== 'Username not found' && loginResults !== undefined) {
    toggleHidden('add', [logInView]);
    toggleHidden('remove', [dashboardView, navBox]);
    userMsg.innerHTML = `${currentUser.name}`;
    } else {
      checkPassowrdMsg(loginResults);
  }
}

const updateUserBookings = (currentUser, allBookings, allRooms) => {
  console.log(allBookings)
  currentUser.userBookings = matchUserBookedRooms(currentUser, allBookings, allRooms);
  console.log('updated userbookigs', currentUser.userBookings)
  renderDashboardBookings(currentUser);
  renderCost(currentUser);
}

// const loginSuccess = (loginResults, allBookings, allRooms) => {

//   getCustomerInfo(getUserId(usernameInput.value)).then((data) => {
//     currentUser = data;
//     checkLogin(loginResults, currentUser);
//     updateUserBookings(currentUser, allBookings, allRooms);
//   })
//   // return loginResults
// }

const loginHandler = (e, allBookings, allRooms, currentUser) => {
  e.preventDefault();
  let loginResults = checkCredentials(usernameInput.value, passwordInput.value);

  if(!usernameInput.value || !passwordInput.value) {
    loginMsg.innerHTML = 'Enter a Username and Password';
  } else if (loginResults !== 'Username not found') {
    loginSuccess(loginResults, allBookings, allRooms);
  } else {
    checkLogin(loginResults, currentUser);
  }
}

// DASHBOARD 
const renderCost = (currentUser) => {
  clearView[totalSpent];
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
  clearView[currentBookingsContainer, pastBookingsContainer];

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
console.log(bookings)
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
} //potentially refactor to test lines 145-147 

const renderFilteredResults = (e, allBookings, allRooms, currentUser) => {
  let search = filterByRoomType(allBookings, allRooms, e.target.id, currentUser)
  clearView([results]);
  renderCards(search, allRooms);
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
    clearView([results, resultsMsg]);
    toggleHidden('add', [filterButtons])
    toggleHidden('remove', [individualBookingView]);
    let selectedRoom = allRooms.rooms.filter((room)=> {
      return room.number === parseInt(e.target.nextElementSibling.id);
    });
    renderIndividualBooking(selectedRoom[0]);
  }
}

const reserveNowHandler = (e, currentUser) => {
  let data = createPostData(currentUser.id, currentUser.searchDate, e.target.previousElementSibling.id)
  postNewBooking(data).then((data) => {
    if(data.newBooking) {
      confirmationMsg.innerText = `Thank you for booking! Your confirmation number is ${data.newBooking.id}`
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

export { newBooking, toDashboard, clearView, toggleHidden, displayResultsText, renderBookings, renderCards, searchBookingsHandler, loginHandler, renderFilteredResults, bookNowHandler, getDate,reserveNowHandler, checkLogin, updateUserBookings  }