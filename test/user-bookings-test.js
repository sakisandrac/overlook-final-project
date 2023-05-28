import { expect } from 'chai';
import { getUserBookings, matchUserBookedRooms, getPastBookings, getCurrentBookings } from '../src/user-bookings';
import { bookingData, roomData } from './sampleData';

describe('User Bookings', () => {
  let currentUser = { id: 4, name: 'Rachel' }
  let currentUser2 = { id: 10, name: 'Ross' }
  let currentUser3 = { id: 6, name: 'Monica' }

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

    })
  })

  describe('getCurrentBookings', () => {
    
  })
})