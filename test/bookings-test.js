import chai from 'chai';
const expect = chai.expect;
import { getBookings, filterBookings } from '../src/newBookings';
import {bookingData, roomData} from './sampleData'

describe('new bookings', () => {
  it('should be a function', () => {
    expect(getBookings).to.be.a('function')
  })
})


describe('filterBookings', () => {
  it('should be a function', () => {
    expect(filterBookings).to.be.a('function')
  })

  it('should filter out bookings based on date', () => {
    let bookings = filterBookings(bookingData, '2023/03/22')
    expect(bookings[0].id).to.equal('1gvvbn0i7k55hl6hh')
  })
})
