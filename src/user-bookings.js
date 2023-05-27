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

export {getUserBookings, matchUserBookedRooms}