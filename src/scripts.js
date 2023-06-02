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
import './images/page-logo.png';
import './images/room1.jpg';
import './images/room2.jpg';
import  { newBooking, toDashboard, searchBookingsHandler, renderFilteredResults, bookNowHandler, reserveNowHandler, checkLoginSuccess, updateUserBookings, checkInputValues, checkPassowrdMsg, checkLoginResults } from './domUpdates';
import { getBookings, getRooms, getCustomerInfo } from './apiCalls';
import  { getUserId, checkCredentials,  } from './login'

// QUERY SELECTORS
const newBookingNav = document.querySelector('#newBooking');
const dashboardNav = document.querySelector('#dashboardNav');
const dashboardView = document.querySelector('#dashboardView');
const newBookingsView = document.querySelector('#newBookingsView');
const searchDates = document.querySelector('#searchDates');
const searchBtn =  document.querySelector('#searchBtn');
const results = document.querySelector('#results');
const resultsMsg = document.querySelector('#resultsMsg');
const loginBtn = document.querySelector('#loginBtn');
const logInView = document.querySelector('#logInView');
const usernameInput = document.querySelector('#usernameInput');
const passwordInput = document.querySelector('#passwordInput');
const loginMsg = document.querySelector('#loginMsg');
const userMsg = document.querySelector('#userMsg');
const currentBookingsContainer = document.querySelector('#currentBookingsContainer');
const currentBookingsMsg = document.querySelector('#currentBookingsMsg');
const navBox = document.querySelector("#navBox");
const pastBookingsContainer = document.querySelector('#pastBookingsContainer');
const totalSpent = document.querySelector('#totalSpent');
const filterButtons = document.querySelector('#filterButtons');
const individualBookingView = document.querySelector('#individualBookingView');
const singleImg = document.querySelector('.single-img');
const roomNumber = document.querySelector('.roomNumber');
const roomType = document.querySelector('.roomType');
const roomCost = document.querySelector('.roomCost');
const reserveBtn = document.querySelector('.reserve');
const confirmationMsg = document.querySelector('.confirmation-message');
const loadingPage = document.querySelector('#loadingPage')

// GLOBAL VARIABLES
let allBookings;
let allRooms;
let currentUser;

const getAllData = () => {
    Promise.all([getBookings(), getRooms(), getCustomerInfo(getUserId(usernameInput.value))])
    .then((data) => {
      allBookings = data[0]
      allRooms = data[1]
      currentUser = data[2];
    })
}

// EVENT LISTENERS
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let loginResults = checkCredentials(usernameInput.value, passwordInput.value);

  if (!checkInputValues() && checkLoginResults(loginResults)) {
    getAllData();
    loadingPage.classList.remove('hidden')
    logInView.classList.add('hidden')
    setTimeout(() => {
      loadingPage.classList.add('hidden')
      checkLoginSuccess(loginResults, currentUser);
      updateUserBookings(currentUser, allBookings, allRooms);
    }, 2000)
  } else {
    checkPassowrdMsg(loginResults);
  }
});
newBookingNav.addEventListener('click', newBooking);
dashboardNav.addEventListener('click', () => {
  toDashboard(allBookings, allRooms, currentUser);
});
searchBtn.addEventListener('click', () => {
  // getAllData();
  searchBookingsHandler(allBookings, allRooms, currentUser);
});
filterButtons.addEventListener('click', (e) => {
  renderFilteredResults(e, allBookings, allRooms, currentUser)
});
newBookingsView.addEventListener('click', (e) => {
  bookNowHandler(e, allRooms);
});
reserveBtn.addEventListener('click', (e) => {
  reserveNowHandler(e, currentUser);
});

export { dashboardView, newBookingsView, searchDates,results, resultsMsg, logInView, usernameInput, passwordInput, loginMsg, allBookings, userMsg, currentBookingsContainer, navBox, pastBookingsContainer, totalSpent, filterButtons, individualBookingView, singleImg,roomNumber, roomType, roomCost, currentBookingsMsg, confirmationMsg, allRooms, getAllData}





