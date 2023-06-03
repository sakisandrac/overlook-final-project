const calculateSpending = (userBookings) => {
  return userBookings.reduce((total, booking)=> {
    return total += booking.room.costPerNight
  },0).toFixed(2);
}

export { calculateSpending }