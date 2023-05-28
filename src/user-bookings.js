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
  }
}

const getCurrentBookings = (currentUser, date) => {
  let bookings = currentUser.userBookings.filter((listing) => {
    return parseInt(listing.booking.split('/').join('') - date) > 0;
 });

  if(bookings.length > 0) {
    return bookings;
  } else {
    return 'No Current Bookings to Display';
  }
}

export { getUserBookings, matchUserBookedRooms, getPastBookings, getCurrentBookings }