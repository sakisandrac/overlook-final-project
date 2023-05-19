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
import  { newBooking, toDashboard, clearView, displayResultsText, searchBookings } from './domUpdates'

// DOM
const newBookingNav = document.querySelector('#newBooking');
const dashboardNav = document.querySelector('#dashboardNav');
const dashboardView = document.querySelector('#dashboardView');
const newBookingsView = document.querySelector('#newBookingsView');
const searchDates = document.querySelector('#searchDates');
const searchBtn =  document.querySelector('#searchBtn');
const results = document.querySelector('#results');
const resultsMsg = document.querySelector('#resultsMsg');

// EVENT LISTENERS
newBookingNav.addEventListener('click', newBooking);
dashboardNav.addEventListener('click', toDashboard);
searchBtn.addEventListener('click', searchBookings);

export { clearView, displayResultsText, dashboardView, newBookingsView, searchDates,results, resultsMsg }





