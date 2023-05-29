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
import  { newBooking, toDashboard, clearView, displayResultsText, searchBookingsHandler, loginHandler, renderFilteredResults, bookNowHandler, reserveNowHandler } from './domUpdates';
import { getBookings, getRooms } from './apiCalls';

// DOM
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

// GLOBAL VARIABLES
let allBookings;
let allRooms;

const start = () => {
  Promise.all([getBookings(), getRooms()])
  .then((data) => {
    console.log(data)
    allBookings = data[0]
    allRooms = data[1]
  })
}

// EVENT LISTENERS
newBookingNav.addEventListener('click', newBooking);
dashboardNav.addEventListener('click', () => {
  toDashboard(allBookings, allRooms);
});
searchBtn.addEventListener('click', () => {
  searchBookingsHandler(allBookings, allRooms);
});
filterButtons.addEventListener('click', (e) => {
  renderFilteredResults(e, allBookings, allRooms)
});
loginBtn.addEventListener('click', (e) => {
  loginHandler(e, allBookings, allRooms)
});
newBookingsView.addEventListener('click', (e) => {
  bookNowHandler(e, allRooms)
})
reserveBtn.addEventListener('click', (e) => {
  reserveNowHandler(e);
});
window.addEventListener('load', start);

export { clearView, displayResultsText, dashboardView, newBookingsView, searchDates,results, resultsMsg, logInView, usernameInput, passwordInput, loginMsg, allBookings, userMsg, currentBookingsContainer, navBox, pastBookingsContainer, totalSpent, filterButtons, individualBookingView, singleImg,roomNumber, roomType, roomCost, currentBookingsMsg, confirmationMsg}





