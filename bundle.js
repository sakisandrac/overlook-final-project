/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newBookingNav": () => (/* binding */ newBookingNav),
/* harmony export */   "dashboardNav": () => (/* binding */ dashboardNav),
/* harmony export */   "dashboardView": () => (/* binding */ dashboardView),
/* harmony export */   "newBookingsView": () => (/* binding */ newBookingsView),
/* harmony export */   "searchDates": () => (/* binding */ searchDates),
/* harmony export */   "results": () => (/* binding */ results),
/* harmony export */   "resultsMsg": () => (/* binding */ resultsMsg),
/* harmony export */   "logInView": () => (/* binding */ logInView),
/* harmony export */   "usernameInput": () => (/* binding */ usernameInput),
/* harmony export */   "passwordInput": () => (/* binding */ passwordInput),
/* harmony export */   "loginMsg": () => (/* binding */ loginMsg),
/* harmony export */   "allBookings": () => (/* binding */ allBookings),
/* harmony export */   "userMsg": () => (/* binding */ userMsg),
/* harmony export */   "currentBookingsContainer": () => (/* binding */ currentBookingsContainer),
/* harmony export */   "navBox": () => (/* binding */ navBox),
/* harmony export */   "pastBookingsContainer": () => (/* binding */ pastBookingsContainer),
/* harmony export */   "totalSpent": () => (/* binding */ totalSpent),
/* harmony export */   "filterButtons": () => (/* binding */ filterButtons),
/* harmony export */   "individualBookingView": () => (/* binding */ individualBookingView),
/* harmony export */   "roomNumber": () => (/* binding */ roomNumber),
/* harmony export */   "roomType": () => (/* binding */ roomType),
/* harmony export */   "roomCost": () => (/* binding */ roomCost),
/* harmony export */   "currentBookingsMsg": () => (/* binding */ currentBookingsMsg),
/* harmony export */   "confirmationMsg": () => (/* binding */ confirmationMsg),
/* harmony export */   "allRooms": () => (/* binding */ allRooms),
/* harmony export */   "getAllData": () => (/* binding */ getAllData)
/* harmony export */ });
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _images_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _images_heart_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _images_single_room_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _images_suite_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _images_residential_suite_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _images_junior_suite_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _images_page_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _images_room1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _images_room2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23);
// IMPORT
















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
    Promise.all([(0,_apiCalls__WEBPACK_IMPORTED_MODULE_13__.getBookings)(), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_13__.getRooms)(), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_13__.getCustomerInfo)((0,_login__WEBPACK_IMPORTED_MODULE_14__.getUserId)(usernameInput.value))])
    .then((data) => {
      allBookings = data[0];
      allRooms = data[1];
      currentUser = data[2];

      (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.loadDashboard)(loginResults, currentUser, allBookings, allRooms);
    });
}

// EVENT LISTENERS
form.addEventListener('submit', (e) => {
  e.preventDefault();
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.loginHandler)();
});
newBookingNav.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_12__.newBooking);
newBookingsBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_12__.newBooking);
dashboardNav.addEventListener('click', () => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.toDashboard)(allBookings, allRooms, currentUser);
});
dashboardBtn.addEventListener('click', () => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.toDashboard)(allBookings, allRooms, currentUser);
});
searchBtn.addEventListener('click', (e) => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.searchBookingsHandler)(allBookings, allRooms, currentUser, e);
});
filterButtons.addEventListener('click', (e) => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.renderFilteredResults)(e, allBookings, allRooms, currentUser);
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.clearFilters)(e, allBookings, allRooms, currentUser);
});
filterButtons.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.renderFilteredResults)(e, allBookings, allRooms, currentUser);
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.clearFilters)(e, allBookings, allRooms, currentUser);
  }
});
newBookingsView.addEventListener('click', (e) => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.bookNowHandler)(e, allRooms);
});
individualBookingView.addEventListener('click', (e) => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.reserveNowHandler)(e, currentUser, allRooms);
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_12__.closeButtonHandler)(e, allBookings, allRooms, currentUser);
});









/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  height: 100%;\n}\n\nbody {\n  background-color: #f8f2e9;\n  margin: 0;\n  height: 100%;\n  font-family: 'Raleway', sans-serif;\n}\n\nnav {\n  background-color: white;\n  height: 70px;\n  margin: 0;\n  color: black;\n  font-size: .75rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.nav-flexbox {\n  height: 70px;\n  display: flex;\n  align-items: flex-end;\n}\n\n.icon-flexbox {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 5px;\n}\n\n.selected {\n  text-decoration: underline overline #f5cac3;\n  text-decoration-thickness: 5px;\n}\n\n.icon {\n  width:20px;\n  padding: 8px;\n}\n\n.icon-button {\n  background-color: #f5cac3;\n  border: none;\n  border-radius: 50%;\n  margin: 10px;\n}\n\n.userLogo {\n  width:20px;\n  padding: 0 5px;\n}\n\n.user-flexbox {\n  color: rgb(105, 91, 74);\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 15px;\n  margin: 10px;\n}\n\n.nav-text:hover,\nbutton:hover,\nli:hover {\n  cursor: pointer;\n}\n\n#errorMsg {\n  color: red;\n  font-size: 20px;\n  margin-left: 15px;\n}\n\n/* LOGIN PAGE */\n#logInView {\n  height: 600px;\n}\n\n#pageLogo {\n  height: 300px;\n  margin: 0 50px;\n}\n\n.login {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\ninput {\n  text-align: center;\n  height: 40px;\n  width: 200px;\n  margin: 20px;\n  border: 2px solid #E6E6E6;\n  border-radius: 24px;\n  background-color: #FAFAF5;\n}\n\n#loginMsg {\n  margin-top: 0;\n  font-size: 1.75rem;\n}\n\nform {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#loginBtn {\n  width: 100px;\n  height: 45px;\n  border: none;\n  border-radius: 24px;\n  background-color: #f5cac3;\n}\n\n/* DASHBOARD VIEW */\nmain {\n  display: flex;\n  justify-content: center;\n  padding: 10px 50px;\n  height: 100%;\n}\n\nh1 {\n  text-align: center;\n  font-size: 2rem;\n}\n\nh2 {\n  font-size: 1.3rem;\n}\n\n.bookings-display {\n  margin-bottom: 40px;\n  display: flex;\n}\n\n.card {\n  background: #FAFAF5;\n  border: 2px solid #E6E6E6;\n  border-radius: 24px;\n  margin: 20px;\n}\n\n.card-img {\n  width: 300px;\n  height: 200px;\n  border-top-right-radius: 24px;\n  border-top-left-radius: 24px;\n}\n\n.card-text-wrapper {\n  padding: 10px;\n}\n\n.card-past-text-wrapper {\n  padding: 5px;\n}\n\n/* BOOKINGS VIEW */\n#searchBtn {\n  width: 100px;\n  border: none;\n  border-radius: 24px;\n  background-color: #f5cac3;\n  padding: 12px;\n}\n\nul {\n  list-style: none;\n}\n\n.filter-flex {\n  display: flex;\n  justify-content: space-between;\n  min-width: 800px;\n}\n\n.filter-btn {\n  width: 150px;\n  padding: 10px;\n  border: 2px solid #E6E6E6;\n  border-radius: 24px;\n  background-color: #FAFAF5;\n  text-align: center;\n}\n\n.filter-selected {\n  width: 150px;\n  padding: 10px;\n  border: 2px solid #E6E6E6;\n  border-radius: 24px;\n  background-color: #f5cac3;\n  text-align: center;\n}\n\n.clear-btn {\n  background: #E6E6E6;\n  border-radius: 15px;\n  padding: 10px;\n}\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.card-booking-text {\n  margin: 5px;\n}\n\n.scroll {\n  width:800px;\n  height: 400px;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  white-space: nowrap;\n}\n\n/* INDIVIDUAL BOOKINGS */\n#individualBookingView {\n  text-align: center;\n}\n\n.individual-booking {\n  display: flex;\n  width: 700px;\n  height: 550px;\n  padding: 0;\n}\n\n.single-img {\n  height: 550px;\n  max-width: 400px;\n  object-fit: cover;\n}\n\n.single-card-main-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300px;\n  padding-right: 5px;\n}\n\n.single-card-text-wrapper {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.10rem;\n  align-items: center;\n  margin-top: 15px;\n  padding-bottom: 15px;\n}\n\n.small-img {\n  object-fit: cover;\n  padding-left: 5px;\n  max-width: 140px;\n}\n\n.small-img-wrapper {\n  display: flex;\n}\n\n.roomType {\n  text-align: center;\n  font-size: 1.4rem;\n}\n\n.confirmation-message {\n  font-size: 1.3rem;\n  margin-bottom: 9px;\n}\n.roomCost {\n  margin-bottom: 20px;\n}\n\n.bookBtn {\n  padding: 10px;\n  border: none;\n  border-radius: 24px;\n  background-color: #f5cac3;\n}\n\n.close {\n  padding: 5px;\n  border: none;\n  border-radius: 24px;\n  background-color: #dfdfdf;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,SAAS;EACT,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,2CAA2C;EAC3C,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,2BAA2B;EAC3B,qBAAqB;EACrB,aAAa;EACb,YAAY;AACd;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,iBAAiB;AACnB;;AAEA,eAAe;AACf;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA,kBAAkB;AAClB;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA,wBAAwB;AACxB;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf","sourcesContent":["html {\n  height: 100%;\n}\n\nbody {\n  background-color: #f8f2e9;\n  margin: 0;\n  height: 100%;\n  font-family: 'Raleway', sans-serif;\n}\n\nnav {\n  background-color: white;\n  height: 70px;\n  margin: 0;\n  color: black;\n  font-size: .75rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.nav-flexbox {\n  height: 70px;\n  display: flex;\n  align-items: flex-end;\n}\n\n.icon-flexbox {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 5px;\n}\n\n.selected {\n  text-decoration: underline overline #f5cac3;\n  text-decoration-thickness: 5px;\n}\n\n.icon {\n  width:20px;\n  padding: 8px;\n}\n\n.icon-button {\n  background-color: #f5cac3;\n  border: none;\n  border-radius: 50%;\n  margin: 10px;\n}\n\n.userLogo {\n  width:20px;\n  padding: 0 5px;\n}\n\n.user-flexbox {\n  color: rgb(105, 91, 74);\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 15px;\n  margin: 10px;\n}\n\n.nav-text:hover,\nbutton:hover,\nli:hover {\n  cursor: pointer;\n}\n\n#errorMsg {\n  color: red;\n  font-size: 20px;\n  margin-left: 15px;\n}\n\n/* LOGIN PAGE */\n#logInView {\n  height: 600px;\n}\n\n#pageLogo {\n  height: 300px;\n  margin: 0 50px;\n}\n\n.login {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\ninput {\n  text-align: center;\n  height: 40px;\n  width: 200px;\n  margin: 20px;\n  border: 2px solid #E6E6E6;\n  border-radius: 24px;\n  background-color: #FAFAF5;\n}\n\n#loginMsg {\n  margin-top: 0;\n  font-size: 1.75rem;\n}\n\nform {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#loginBtn {\n  width: 100px;\n  height: 45px;\n  border: none;\n  border-radius: 24px;\n  background-color: #f5cac3;\n}\n\n/* DASHBOARD VIEW */\nmain {\n  display: flex;\n  justify-content: center;\n  padding: 10px 50px;\n  height: 100%;\n}\n\nh1 {\n  text-align: center;\n  font-size: 2rem;\n}\n\nh2 {\n  font-size: 1.3rem;\n}\n\n.bookings-display {\n  margin-bottom: 40px;\n  display: flex;\n}\n\n.card {\n  background: #FAFAF5;\n  border: 2px solid #E6E6E6;\n  border-radius: 24px;\n  margin: 20px;\n}\n\n.card-img {\n  width: 300px;\n  height: 200px;\n  border-top-right-radius: 24px;\n  border-top-left-radius: 24px;\n}\n\n.card-text-wrapper {\n  padding: 10px;\n}\n\n.card-past-text-wrapper {\n  padding: 5px;\n}\n\n/* BOOKINGS VIEW */\n#searchBtn {\n  width: 100px;\n  border: none;\n  border-radius: 24px;\n  background-color: #f5cac3;\n  padding: 12px;\n}\n\nul {\n  list-style: none;\n}\n\n.filter-flex {\n  display: flex;\n  justify-content: space-between;\n  min-width: 800px;\n}\n\n.filter-btn {\n  width: 150px;\n  padding: 10px;\n  border: 2px solid #E6E6E6;\n  border-radius: 24px;\n  background-color: #FAFAF5;\n  text-align: center;\n}\n\n.filter-selected {\n  width: 150px;\n  padding: 10px;\n  border: 2px solid #E6E6E6;\n  border-radius: 24px;\n  background-color: #f5cac3;\n  text-align: center;\n}\n\n.clear-btn {\n  background: #E6E6E6;\n  border-radius: 15px;\n  padding: 10px;\n}\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.card-booking-text {\n  margin: 5px;\n}\n\n.scroll {\n  width:800px;\n  height: 400px;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  white-space: nowrap;\n}\n\n/* INDIVIDUAL BOOKINGS */\n#individualBookingView {\n  text-align: center;\n}\n\n.individual-booking {\n  display: flex;\n  width: 700px;\n  height: 550px;\n  padding: 0;\n}\n\n.single-img {\n  height: 550px;\n  max-width: 400px;\n  object-fit: cover;\n}\n\n.single-card-main-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300px;\n  padding-right: 5px;\n}\n\n.single-card-text-wrapper {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.10rem;\n  align-items: center;\n  margin-top: 15px;\n  padding-bottom: 15px;\n}\n\n.small-img {\n  object-fit: cover;\n  padding-left: 5px;\n  max-width: 140px;\n}\n\n.small-img-wrapper {\n  display: flex;\n}\n\n.roomType {\n  text-align: center;\n  font-size: 1.4rem;\n}\n\n.confirmation-message {\n  font-size: 1.3rem;\n  margin-bottom: 9px;\n}\n.roomCost {\n  margin-bottom: 20px;\n}\n\n.bookBtn {\n  padding: 10px;\n  border: none;\n  border-radius: 24px;\n  background-color: #f5cac3;\n}\n\n.close {\n  padding: 5px;\n  border: none;\n  border-radius: 24px;\n  background-color: #dfdfdf;\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/user.png");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/home.png");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/heart-logo.png");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/search.png");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/single room.jpg");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/suite.jpg");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/residential suite.jpg");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/junior suite.jpg");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/page-logo.png");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/room1.jpg");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/room2.jpg");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeButtonHandler": () => (/* binding */ closeButtonHandler),
/* harmony export */   "newBooking": () => (/* binding */ newBooking),
/* harmony export */   "toDashboard": () => (/* binding */ toDashboard),
/* harmony export */   "clearView": () => (/* binding */ clearView),
/* harmony export */   "toggleHidden": () => (/* binding */ toggleHidden),
/* harmony export */   "displayResultsText": () => (/* binding */ displayResultsText),
/* harmony export */   "renderBookings": () => (/* binding */ renderBookings),
/* harmony export */   "renderCards": () => (/* binding */ renderCards),
/* harmony export */   "searchBookingsHandler": () => (/* binding */ searchBookingsHandler),
/* harmony export */   "renderFilteredResults": () => (/* binding */ renderFilteredResults),
/* harmony export */   "bookNowHandler": () => (/* binding */ bookNowHandler),
/* harmony export */   "getDate": () => (/* reexport safe */ _get_dates__WEBPACK_IMPORTED_MODULE_4__.getDate),
/* harmony export */   "reserveNowHandler": () => (/* binding */ reserveNowHandler),
/* harmony export */   "checkLoginSuccess": () => (/* binding */ checkLoginSuccess),
/* harmony export */   "updateUserBookings": () => (/* binding */ updateUserBookings),
/* harmony export */   "checkInputValues": () => (/* binding */ checkInputValues),
/* harmony export */   "checkPassowrdMsg": () => (/* binding */ checkPassowrdMsg),
/* harmony export */   "checkLoginResults": () => (/* binding */ checkLoginResults),
/* harmony export */   "loadDashboard": () => (/* binding */ loadDashboard),
/* harmony export */   "loginHandler": () => (/* binding */ loginHandler),
/* harmony export */   "clearFilters": () => (/* binding */ clearFilters)
/* harmony export */ });
/* harmony import */ var _newBookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _user_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _calculations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _get_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);








// SWITCHING VIEWS
const newBooking = () => {
  disablePreviousDates();
  _scripts__WEBPACK_IMPORTED_MODULE_2__.searchDates.value = '';
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_2__.filterButtons, _scripts__WEBPACK_IMPORTED_MODULE_2__.results, _scripts__WEBPACK_IMPORTED_MODULE_2__.resultsMsg]);
  toggleHidden('add', [_scripts__WEBPACK_IMPORTED_MODULE_2__.dashboardView, _scripts__WEBPACK_IMPORTED_MODULE_2__.logInView, _scripts__WEBPACK_IMPORTED_MODULE_2__.individualBookingView]);
  toggleHidden('remove', [_scripts__WEBPACK_IMPORTED_MODULE_2__.newBookingsView]);
  _scripts__WEBPACK_IMPORTED_MODULE_2__.dashboardNav.classList.remove('selected');
  _scripts__WEBPACK_IMPORTED_MODULE_2__.newBookingNav.classList.add('selected');
}

const toDashboard = (allBookings, allRooms, currentUser) => {
  toggleHidden('remove', [_scripts__WEBPACK_IMPORTED_MODULE_2__.dashboardView]);
  toggleHidden('add', [_scripts__WEBPACK_IMPORTED_MODULE_2__.newBookingsView]);
  updateUserBookings(currentUser, allBookings, allRooms);
  _scripts__WEBPACK_IMPORTED_MODULE_2__.dashboardNav.classList.add('selected');
  _scripts__WEBPACK_IMPORTED_MODULE_2__.newBookingNav.classList.remove('selected');
}

// LOGIN PAGE
const loginHandler = () => {
  let loginResults = (0,_login__WEBPACK_IMPORTED_MODULE_6__.checkCredentials)(_scripts__WEBPACK_IMPORTED_MODULE_2__.usernameInput.value, _scripts__WEBPACK_IMPORTED_MODULE_2__.passwordInput.value);

  if (!checkInputValues() && checkLoginResults(loginResults)) {
    (0,_scripts__WEBPACK_IMPORTED_MODULE_2__.getAllData)(loginResults);
  } else {
    checkPassowrdMsg(loginResults);
  };
}

const checkInputValues = () => {
  if(!_scripts__WEBPACK_IMPORTED_MODULE_2__.usernameInput.value || !_scripts__WEBPACK_IMPORTED_MODULE_2__.passwordInput.value) {
    _scripts__WEBPACK_IMPORTED_MODULE_2__.loginMsg.innerHTML = 'Enter a Username and Password';
    return true;
  }
}

const checkPassowrdMsg = (loginResults) => {
  if(loginResults) {
    _scripts__WEBPACK_IMPORTED_MODULE_2__.loginMsg.innerHTML = loginResults;
  } else {
    _scripts__WEBPACK_IMPORTED_MODULE_2__.loginMsg.innerHTML = 'Incorrect Password';
  }
}
const checkLoginResults = (loginResults) => {
  if(loginResults !== 'Username not found' && loginResults !== undefined) {
    return true;
  }
}

const checkLoginSuccess = (loginResults, currentUser) => {
  if(checkLoginResults(loginResults)) {
    toggleHidden('add', [_scripts__WEBPACK_IMPORTED_MODULE_2__.logInView]);
    toggleHidden('remove', [_scripts__WEBPACK_IMPORTED_MODULE_2__.dashboardView, _scripts__WEBPACK_IMPORTED_MODULE_2__.navBox]);
    _scripts__WEBPACK_IMPORTED_MODULE_2__.userMsg.innerHTML = `${currentUser.name}`;
  };
}

const updateUserBookings = (currentUser, allBookings, allRooms) => {
  currentUser.userBookings = (0,_user_bookings__WEBPACK_IMPORTED_MODULE_1__.matchUserBookedRooms)(currentUser, allBookings, allRooms);
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
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_2__.totalSpent]);
  _scripts__WEBPACK_IMPORTED_MODULE_2__.totalSpent.innerHTML = `Total Spent on Bookings: $${(0,_calculations__WEBPACK_IMPORTED_MODULE_3__.calculateSpending)(currentUser.userBookings)}`;
}

const renderCards = (bookings) => {
  bookings.forEach((booking) => {
    _scripts__WEBPACK_IMPORTED_MODULE_2__.results.innerHTML += `<article class="card">
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
    _scripts__WEBPACK_IMPORTED_MODULE_2__.currentBookingsMsg.innerText = '';
    renderUserBookings(userCurrentBookings, currentBookingsContainer);
  } else {
    _scripts__WEBPACK_IMPORTED_MODULE_2__.currentBookingsMsg.innerText = (0,_user_bookings__WEBPACK_IMPORTED_MODULE_1__.getCurrentBookings)(currentUser);
  };
}

const renderDashboardBookings = (currentUser) => {
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_2__.currentBookingsContainer, _scripts__WEBPACK_IMPORTED_MODULE_2__.pastBookingsContainer]);

  const dateToday = new Date();
  const userCurrentBookings = (0,_user_bookings__WEBPACK_IMPORTED_MODULE_1__.getCurrentBookings)(currentUser, (0,_get_dates__WEBPACK_IMPORTED_MODULE_4__.getDate)(dateToday));
  const userPastBookings = (0,_user_bookings__WEBPACK_IMPORTED_MODULE_1__.getPastBookings)(currentUser, (0,_get_dates__WEBPACK_IMPORTED_MODULE_4__.getDate)(dateToday));

  renderUserBookings(userPastBookings, _scripts__WEBPACK_IMPORTED_MODULE_2__.pastBookingsContainer);
  checkCurrentBookings(userCurrentBookings, _scripts__WEBPACK_IMPORTED_MODULE_2__.currentBookingsContainer, currentUser);
}

// BOOKINGS PAGE
const renderBookings = (bookedRooms, allRooms) => {
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_2__.results]);
    let rooms = (0,_newBookings__WEBPACK_IMPORTED_MODULE_0__.getAvailableRooms)(bookedRooms, allRooms);
      displayResultsText((0,_newBookings__WEBPACK_IMPORTED_MODULE_0__.searchResultsMsg)(rooms));
      renderCards(rooms);
}

const displayResultsText = (text) => {
  _scripts__WEBPACK_IMPORTED_MODULE_2__.resultsMsg.innerText = text;
}

const disablePreviousDates = () => {
  const today = new Date();
  const min = `${today.getFullYear()}-${(0,_get_dates__WEBPACK_IMPORTED_MODULE_4__.setMonth)(today)}-${(0,_get_dates__WEBPACK_IMPORTED_MODULE_4__.setDay)(today)}`;
  _scripts__WEBPACK_IMPORTED_MODULE_2__.searchDates.setAttribute('min', min);
}

const renderFilterButtons = (e) => {
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_2__.filterButtons]);
  _scripts__WEBPACK_IMPORTED_MODULE_2__.filterButtons.innerHTML += `
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
  currentUser.searchDate = _scripts__WEBPACK_IMPORTED_MODULE_2__.searchDates.value.replaceAll('-', '/');
  toggleHidden('add', [_scripts__WEBPACK_IMPORTED_MODULE_2__.individualBookingView]);
  toggleHidden('remove', [_scripts__WEBPACK_IMPORTED_MODULE_2__.results, _scripts__WEBPACK_IMPORTED_MODULE_2__.resultsMsg]);

  if(currentUser.searchDate) {
    renderFilterButtons(e);
    let bookedRooms = (0,_newBookings__WEBPACK_IMPORTED_MODULE_0__.filterBookings)(bookings, currentUser.searchDate);
    renderBookings(bookedRooms, allRooms);
    return bookedRooms;
    } else {
    displayResultsText((0,_newBookings__WEBPACK_IMPORTED_MODULE_0__.searchResultsMsg)());
  }
}

const filterByRoomType = (bookingResults, allRooms, type, currentUser, e) => {
  const bookings = searchBookingsHandler(bookingResults, allRooms, currentUser, e);
  const rooms = (0,_newBookings__WEBPACK_IMPORTED_MODULE_0__.getAvailableRooms)(bookings, allRooms);
  return rooms.filter((room) => {
    return room.roomType.split(' ').join('') === type.target.id;
  });
}

const renderFilteredResults = (e, allBookings, allRooms, currentUser) => {
  if(e.target.classList.contains('filter-btn')) {
    renderFilterButtons(e);
    let search = filterByRoomType(allBookings, allRooms, e, currentUser, e);
    clearView([_scripts__WEBPACK_IMPORTED_MODULE_2__.results]);
    renderCards(search, allRooms);
  }
}

const clearFilters = (e, allBookings, allRooms, currentUser) => {
  if (e.target.classList.contains('clear-btn')) {
    searchBookingsHandler(allBookings, allRooms, currentUser, e);
  }
}

const renderIndividualBooking = (e, selectedRoom, message) => {
  toggleHidden('remove', [_scripts__WEBPACK_IMPORTED_MODULE_2__.individualBookingView]);
  _scripts__WEBPACK_IMPORTED_MODULE_2__.individualBookingView.show();
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_2__.individualBookingView]);

  _scripts__WEBPACK_IMPORTED_MODULE_2__.individualBookingView.innerHTML += `
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
    clearView([_scripts__WEBPACK_IMPORTED_MODULE_2__.confirmationMsg, _scripts__WEBPACK_IMPORTED_MODULE_2__.filterButtons]);
    toggleHidden('add', [_scripts__WEBPACK_IMPORTED_MODULE_2__.results, _scripts__WEBPACK_IMPORTED_MODULE_2__.resultsMsg]);
    toggleHidden('remove', [_scripts__WEBPACK_IMPORTED_MODULE_2__.individualBookingView]);

    const selectedRoom = (0,_newBookings__WEBPACK_IMPORTED_MODULE_0__.matchIndividualRoom)(e.target.nextElementSibling.id, allRooms);
    renderIndividualBooking(e, selectedRoom[0]);
  };
}

const reserveNowHandler = (e, currentUser, allRooms) => {
  if (e.target.classList.contains('reserve')) {
    let data = (0,_apiCalls__WEBPACK_IMPORTED_MODULE_5__.createPostData)(currentUser.id, currentUser.searchDate, e.target.previousElementSibling.id);

    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_5__.postNewBooking)(data).then((data) => {
      if (data.newBooking) {
        const selectedRoom = (0,_newBookings__WEBPACK_IMPORTED_MODULE_0__.matchIndividualRoom)(data.newBooking.roomNumber, allRooms)[0];
        const message = `Thank you for booking! Your confirmation number is ${data.newBooking.id}`;
        renderIndividualBooking(e, selectedRoom, message);
        (0,_scripts__WEBPACK_IMPORTED_MODULE_2__.getAllData)();
      } else {
        _scripts__WEBPACK_IMPORTED_MODULE_2__.confirmationMsg.innerText = data;
      };
    });
  };
}

const closeButtonHandler = (e, allBookings, allRooms, currentUser) => {
  if(e.target.classList.contains('close')) {
    _scripts__WEBPACK_IMPORTED_MODULE_2__.individualBookingView.close();
    toggleHidden('remove', [_scripts__WEBPACK_IMPORTED_MODULE_2__.results, _scripts__WEBPACK_IMPORTED_MODULE_2__.resultsMsg]);
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



/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchResultsMsg": () => (/* binding */ searchResultsMsg),
/* harmony export */   "filterBookings": () => (/* binding */ filterBookings),
/* harmony export */   "getAvailableRooms": () => (/* binding */ getAvailableRooms),
/* harmony export */   "matchIndividualRoom": () => (/* binding */ matchIndividualRoom)
/* harmony export */ });
const filterBookings = (data, searchDate) => {
  return data.bookings.filter((booking) => {
    return booking.date === searchDate;
  });
}

const getAvailableRooms = (bookedRooms, allRooms) => {
  let rooms = bookedRooms.map((booking) => {
    return booking.roomNumber;
  })
  return allRooms.rooms.filter((room) => {
    return !rooms.includes(room.number);
  });
}

const searchResultsMsg = (results) => {
  if(!results) {
    return 'Enter a valid date!';
  } else if (results.length > 0){
    return `There are ${results.length} rooms available:`;
  } else {
    return 'We are so sorry! There are no rooms avaiable for this date, please select a different date.';
  };
}

const matchIndividualRoom = (roomNumber, allRooms) => {
  return allRooms.rooms.filter((room) => {
    return room.number === parseInt(roomNumber);
  });
}





/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserBookings": () => (/* binding */ getUserBookings),
/* harmony export */   "matchUserBookedRooms": () => (/* binding */ matchUserBookedRooms),
/* harmony export */   "getPastBookings": () => (/* binding */ getPastBookings),
/* harmony export */   "getCurrentBookings": () => (/* binding */ getCurrentBookings)
/* harmony export */ });
const getUserBookings = (currentUser, allBookings) => {
  return allBookings.bookings.filter((booking) => {
    return booking.userID === currentUser.id;
  });
}

const matchUserBookedRooms = (currentUser, allBookings, allRooms) => {
  let bookings = getUserBookings(currentUser, allBookings)
  return bookings.map((booking) => {
    return allRooms.rooms.reduce((obj, room) => {
      if(booking.roomNumber === room.number){
       obj = {room, booking: booking.date}
      }
      return obj;
    }, {});
  });
}

const getPastBookings = (currentUser, date) => {
  let bookings = currentUser.userBookings.filter((listing) => {
    return parseInt(listing.booking.split('/').join('') - date) < 0;
   });

   if(bookings.length > 0) {
    return bookings;
  } else {
    return 'No Current Bookings to Display';
  };
}

const getCurrentBookings = (currentUser, date) => {
  let bookings = currentUser.userBookings.filter((listing) => {
    return parseInt(listing.booking.split('/').join('') - date) > 0;
 });

  if(bookings.length > 0) {
    return bookings;
  } else {
    return 'No Current Bookings to Display';
  };
}



/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateSpending": () => (/* binding */ calculateSpending)
/* harmony export */ });
const calculateSpending = (userBookings) => {
  return userBookings.reduce((total, booking)=> {
    return total += booking.room.costPerNight
  },0).toFixed(2);
}



/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMonth": () => (/* binding */ setMonth),
/* harmony export */   "setDay": () => (/* binding */ setDay),
/* harmony export */   "getDate": () => (/* binding */ getDate)
/* harmony export */ });
const setMonth = (today) => {
  let month;

  if(today.getMonth() < 12) {
    month = today.getMonth() + 1;
  } else {
    month =  1;
  }

  if (today.getMonth().toString().length < 2) {
    month = `0${month}`;
  } 

  return month;
}

const setDay = (today) => {
  if (today.getDate().toString().length < 2) {
    return `0${today.getDate()}`;
  } else {
    return today.getDate().toString();
  }
}

const getDate = (today) => {
  let month = setMonth(today);
  let day = setDay(today);

  return `${today.getFullYear()}${month}${day}`;
}




/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBookings": () => (/* binding */ getBookings),
/* harmony export */   "getRooms": () => (/* binding */ getRooms),
/* harmony export */   "getCustomerInfo": () => (/* binding */ getCustomerInfo),
/* harmony export */   "createPostData": () => (/* binding */ createPostData),
/* harmony export */   "postNewBooking": () => (/* binding */ postNewBooking)
/* harmony export */ });
const getBookings = () => {
  return fetch('https://overlook-api-nu.vercel.app/api/v1/bookings')
  .then(res => res.json())
  .catch((err) => {
    console.log(err)
    return document.querySelector('#errorMsg').innerText = `Error please try refreshing page (${err})`;
  });
}

const getRooms = () => {
  return fetch('https://overlook-api-nu.vercel.app/api/v1/rooms')
  .then(res => res.json())
  .catch((err) => {
    console.log(err)
    return document.querySelector('#errorMsg').innerText = `Error please try refreshing page (${err})`;
  });
}

const getCustomerInfo = (id) => {
  return fetch(`https://overlook-api-nu.vercel.app/api/v1/customers/${id}`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((err) => {
    console.log(err)
    return document.querySelector('#errorMsg').innerText = `Error please try refreshing page (${err})`;
  });
}

const createPostData = (userID, date, roomNumber) => {
  return { 
    userID,
    date,
    roomNumber: parseInt(roomNumber)
  }
}

const postNewBooking = (data) => {
  return fetch('https://overlook-api-nu.vercel.app/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => {
      console.log(err);
      return document.querySelector('#errorMsg').innerText = `Error please try refreshing page (${err})`;
    });
}





/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkCredentials": () => (/* binding */ checkCredentials),
/* harmony export */   "matchPassword": () => (/* binding */ matchPassword),
/* harmony export */   "matchUser": () => (/* binding */ matchUser),
/* harmony export */   "getUserId": () => (/* binding */ getUserId),
/* harmony export */   "userLogins": () => (/* binding */ userLogins)
/* harmony export */ });
const userLogins = (num) => {
  if (num) {
    return {
      [`customer${num}`]: {
        username: `customer${num}`,
        password: 'overlook2021'
      },
    }
  }
}

const checkCredentials = (username, password) => {
  if(username && password) {
    return matchUser(username, password);
  } else {
    return 'Please enter both username and password!';
  };
}

const matchUser = (username, password) => {
  const customerId = getUserId(username);

  if (customerId > 0 && customerId <= 50) {
  return matchPassword(customerId, password);
  } else {
    return 'Username not found';
  };
}

const matchPassword = (id, password) => {
  if (password === userLogins(id)[`customer${id}`].password) {
    return true;
  };
}

const getUserId = (username) => {
  if (username.length === 10 || username.length === 9) {
    return parseInt(username.split('customer')[1]);
  }
}





/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map