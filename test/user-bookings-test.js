import { expect } from 'chai';
import { getUserBookings, matchUserBookedRooms, getPastBookings, getCurrentBookings } from '../src/user-bookings';
import { bookingData, roomData } from './sampleData';

describe('User Bookings', () => {
  const today = 20230301
  const currentUser = { id: 4, name: 'Rachel' }
  const currentUser2 = { id: 10, name: 'Ross' }
  const currentUser3 =  { 
    id: 6, 
    name: 'Monica', 
    userBookings: [{booking: "2022/01/10"}, {booking: "2024/01/10"} ] 
  };

  describe('getUserBookings', () => {

    it('should get user bookings based on id', () => {
      expect(getUserBookings(currentUser, bookingData)).to.deep.equal([bookingData.bookings[1]]);
    });

    it('should get another user bookings based on id', () => {
      expect(getUserBookings(currentUser3, bookingData)).to.deep.equal([bookingData.bookings[2], bookingData.bookings[3], bookingData.bookings[4], bookingData.bookings[5], bookingData.bookings[6], bookingData.bookings[7], bookingData.bookings[8], bookingData.bookings[9]]);
    });

    it('should not return any results if bookings data is not found', () => {
      expect(getUserBookings(currentUser2, bookingData)).to.deep.equal([]);
    });
  });

  describe('matchUserBookedRooms', () => {

    it('return all with rooms user booked with dates', () => {
      expect(matchUserBookedRooms(currentUser, bookingData, roomData)).to.deep.equal([{ room: roomData.rooms[5], booking: '2022/04/20' }]);
    });

    it('should return an empty object if no rooms were found', () => {
      expect(matchUserBookedRooms(currentUser2, bookingData, roomData)).to.deep.equal([]);
    });
  });

  describe('getPastBookings', () => {

    it('should return bookings that are before todays date', () => {
      expect(getPastBookings(currentUser3, today).length).to.equal(1);
    });

    it('should say if there are no bookings before todays date', () => {
      expect(getPastBookings(currentUser3, 20200301)).to.equal('No Current Bookings to Display');
    });

  });
  
  describe('getCurrentBookings', () => {

    it('should return bookings that are after todays date', () => {
      expect(getCurrentBookings(currentUser3, today).length).to.equal(1);
      expect(getCurrentBookings(currentUser3, today)[0].booking).to.equal('2024/01/10');
    });

    it('should say if there are no current bookings', () => {
      expect(getCurrentBookings(currentUser3, 20290301)).to.equal('No Current Bookings to Display');
    });

  });
})