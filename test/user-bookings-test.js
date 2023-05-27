import { expect } from 'chai';
import { getUserBookings, matchUserBookedRooms } from '../src/user-bookings';
import { bookingData, roomData } from './sampleData';

describe('getUserBookings', () => {
  it('should get user bookings based on id', () => {

    expect(getUserBookings({id: 4, name: 'Rachel'}, bookingData)).to.deep.equal([bookingData.bookings[1]]);
  });

  it('should get another user bookings based on id', () => {

    expect(getUserBookings({id: 6, name: 'Monica'}, bookingData)).to.deep.equal([bookingData.bookings[2], bookingData.bookings[3], bookingData.bookings[4], bookingData.bookings[5], bookingData.bookings[6], bookingData.bookings[7], bookingData.bookings[8], bookingData.bookings[9]]);
  });

  it('should not return any results if bookings data is not found', () => {

    expect(getUserBookings({id: 10, name: 'Ross'}, bookingData)).to.deep.equal([]);
  });
});

describe('matchUserBookedRooms', () => {

  it('return all with rooms user booked with dates', () => {

    expect(matchUserBookedRooms({id: 4, name: 'Rachel'}, bookingData, roomData)).to.deep.equal([{room: roomData.rooms[5], booking: '2022/04/20'}]);
  });

  it('should return an empty object if no rooms were found', () => {

    expect(matchUserBookedRooms({id: 10, name: 'Ross'}, bookingData, roomData)).to.deep.equal([]);
  });
});

