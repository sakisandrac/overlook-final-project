const filterBookings = (data, searchDate) => {
  return data.bookings.filter((booking) => {
      return booking.date === searchDate;
    })
}

const getAvailableRooms = (bookedRooms, data) =>{
  bookedRooms.forEach((booking) => {
    for (let i=0; i< data.rooms.length; i++) {
      if (booking.roomNumber === data.rooms[i].number){
        data.rooms.splice(i, 1)
      }
    }
  })
  console.log('splice data', data.rooms)
  return data.rooms;
}

const searchResultsMsg = (results) => {
  if(!results) {
    return 'Enter a valid date!'
  } else if (results.length > 0){
    return `There are ${results.length} rooms available:`
  } else {
    return 'We are so sorry! There are no rooms avaiable for this date, please select a different date.'
  }
} 

export { searchResultsMsg, filterBookings, getAvailableRooms}
