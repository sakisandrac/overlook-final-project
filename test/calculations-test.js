import { calculateSpending } from '../src/calculations';
import { matchUserBookedRooms } from '../src/user-bookings';
import {bookingData, roomData} from './sampleData';
import chai from 'chai';
const expect = chai.expect;

describe('Calculations', () => {

  describe('calculateSpending', () => {
    it('should calculate total cost of rooms booked', () => {
      const user = {id: 6};
      const bookings = matchUserBookedRooms(user, bookingData, roomData);
      
      expect(calculateSpending(bookings)).to.equal('80.00');
    });

    it('should calculate total cost of rooms booked for another user', () => {
      const user = {id: 9};
      const bookings = matchUserBookedRooms(user, bookingData, roomData);
      
      expect(calculateSpending(bookings)).to.equal('10.00');
    });

    it('should calculate to 0 if no bookings are found', () => {
      const user = {id: 22};
      const bookings = matchUserBookedRooms(user, bookingData, roomData);
  
      expect(calculateSpending(bookings)).to.equal('0.00');
    });
  });
})
