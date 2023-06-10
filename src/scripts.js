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
import { clearFilters, newBooking, toDashboard, searchBookingsHandler, renderFilteredResults, bookNowHandler, reserveNowHandler, loadDashboard, loginHandler,closeButtonHandler } from './domUpdates';
import { getBookings, getRooms, getCustomerInfo } from './apiCalls';
import { getUserId } from './login'

// QUERY SELECTORS
const newBookingNav = document.querySelector('#newBooking');
const newBookingsBtn = document.querySelector('#newBookingsBtn');
const dashboardNav = document.querySelector('#dashboardNav');
const dashboardBtn = document.querySelector('#dashboardBtn');
const dashboardView = document.querySelector('#dashboardView');
const newBookingsView = document.querySelector('#newBookingsView');
const searchDates = document.querySelector('#searchDates');
const searchBtn =  document.querySelector('#searchBtn');
const results = document.querySelector('#results');
const resultsMsg = document.querySelector('#resultsMsg');
const form = document.querySelector('form');
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
const roomNumber = document.querySelector('.roomNumber');
const roomType = document.querySelector('.roomType');
const roomCost = document.querySelector('.roomCost');
const confirmationMsg = document.querySelector('.confirmation-message');

// GLOBAL VARIABLES
let allBookings;
let allRooms;
let currentUser;

// START FUNCTION
const getAllData = (loginResults) => {
    Promise.all([getBookings(), getRooms(), getCustomerInfo(getUserId(usernameInput.value))])
    .then((data) => {
      allBookings = data[0];
      allRooms = data[1];
      currentUser = data[2];

      loadDashboard(loginResults, currentUser, allBookings, allRooms);
    });
}

// EVENT LISTENERS
form.addEventListener('submit', (e) => {
  e.preventDefault();
  loginHandler();
});
newBookingNav.addEventListener('click', newBooking);
newBookingsBtn.addEventListener('click', newBooking);
dashboardNav.addEventListener('click', () => {
  toDashboard(allBookings, allRooms, currentUser);
});
dashboardBtn.addEventListener('click', () => {
  toDashboard(allBookings, allRooms, currentUser);
});
searchBtn.addEventListener('click', (e) => {
  searchBookingsHandler(allBookings, allRooms, currentUser, e);
});
filterButtons.addEventListener('click', (e) => {
  renderFilteredResults(e, allBookings, allRooms, currentUser);
  clearFilters(e, allBookings, allRooms, currentUser);
});
filterButtons.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
  renderFilteredResults(e, allBookings, allRooms, currentUser);
  clearFilters(e, allBookings, allRooms, currentUser);
  }
});
newBookingsView.addEventListener('click', (e) => {
  bookNowHandler(e, allRooms);
});
individualBookingView.addEventListener('click', (e) => {
  reserveNowHandler(e, currentUser, allRooms);
  closeButtonHandler(e, allBookings, allRooms, currentUser);
});

export { newBookingNav, dashboardNav, dashboardView, newBookingsView, searchDates,results, resultsMsg, logInView, usernameInput, passwordInput, loginMsg, allBookings, userMsg, currentBookingsContainer, navBox, pastBookingsContainer, totalSpent, filterButtons, individualBookingView,roomNumber, roomType, roomCost, currentBookingsMsg, confirmationMsg, allRooms, getAllData}





