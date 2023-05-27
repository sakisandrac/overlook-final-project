import  { searchBookings } from './domUpdates';
import { getAvailableRooms } from './newBookings';

const filterByRoomType = (allBookings, allRooms, type) => {
  const bookings = searchBookings(allBookings, allRooms);
  const rooms= getAvailableRooms(bookings, allRooms);
  return rooms.filter((room) => {
    return room.roomType.split(' ').join('') === type;
  });
}

export { filterByRoomType }