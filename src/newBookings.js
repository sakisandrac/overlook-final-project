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


export { searchResultsMsg, filterBookings, getAvailableRooms, matchIndividualRoom }
