import { calculateSpending } from '../src/calculations';
import { matchUserBookedRooms } from '../src/user-bookings';
import {bookingData, roomData} from './sampleData';
import chai from 'chai';
const expect = chai.expect;

describe('calculateSpending', () => {
  let user = {id: 6}
  it('should calculate total cost of rooms booked', () => {
    let bookings = matchUserBookedRooms(user, bookingData, roomData)
    
    expect(calculateSpending(bookings)).to.equal('80.00')
  })
})