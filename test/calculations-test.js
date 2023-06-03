import { calculateSpending } from '../src/calculations';
import { matchUserBookedRooms } from '../src/user-bookings';
import {bookingData, roomData} from './sampleData';
import chai from 'chai';
const expect = chai.expect;

describe('Calculations', () => {

  describe('calculateSpending', () => {
    it('should calculate total cost of rooms booked', () => {
      let user = {id: 6};
      let bookings = matchUserBookedRooms(user, bookingData, roomData);
      
      expect(calculateSpending(bookings)).to.equal('80.00');
    });

    it('should calculate total cost of rooms booked for another user', () => {
      let user = {id: 9};
      let bookings = matchUserBookedRooms(user, bookingData, roomData);
      
      expect(calculateSpending(bookings)).to.equal('10.00');
    });

    it('should calculate to 0 if no bookings are found', () => {
      let user = {id: 22};
      let bookings = matchUserBookedRooms(user, bookingData, roomData);
  
      expect(calculateSpending(bookings)).to.equal('0.00');
    });
  });
})
