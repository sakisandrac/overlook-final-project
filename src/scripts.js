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
import './images/page-logo.png'
import  { newBooking, toDashboard, clearView, displayResultsText, searchBookings, loginHandler } from './domUpdates'
import { getCustomerInfo, getBookings, getRooms } from './apiCalls'

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
const navBox = document.querySelector("#navBox");
const pastBookingsContainer = document.querySelector('#pastBookingsContainer');

// GLOBAL VARIABLES
let currentUser;
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

window.addEventListener('load', start)
// EVENT LISTENERS
newBookingNav.addEventListener('click', newBooking);
dashboardNav.addEventListener('click', toDashboard);
searchBtn.addEventListener('click', () => {
  searchBookings(allBookings, allRooms)
});
loginBtn.addEventListener('click', (e) => {
  loginHandler(e, currentUser, allBookings, allRooms)
})

getCustomerInfo(50).then((data)=>{
  currentUser = data
  console.log(data.name)
})

export { clearView, displayResultsText, dashboardView, newBookingsView, searchDates,results, resultsMsg, logInView, usernameInput, passwordInput, loginMsg, allBookings, userMsg, currentBookingsContainer, navBox, pastBookingsContainer}





