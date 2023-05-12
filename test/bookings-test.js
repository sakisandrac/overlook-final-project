import chai from 'chai';
const expect = chai.expect;
import { getBookings, filterBookings, getAvailableRooms, searchResultsMsg } from '../src/newBookings';
import {bookingData, roomData} from './sampleData'

describe('getBookings', () => {
  it('should be a function', () => {
    expect(getBookings).to.be.a('function');
  })
})

describe('filterBookings', () => {
  it('should be a function', () => {
    expect(filterBookings).to.be.a('function');
  })

  it('should filter out bookings based on date', () => {
    let bookings = filterBookings(bookingData, '2023/03/22');
    expect(bookings[0].id).to.equal('1gvvbn0i7k55hl6hh');
  })
})

describe('getAvailableRooms', () => {
  it('should be a function', () => {
    expect(getAvailableRooms).to.be.a('function');
  })

  it('should return available rooms', () => {
    let bookedRooms = filterBookings(bookingData, '2023/03/22')
    let allRooms = getAvailableRooms(bookedRooms, roomData);
console.log(allRooms)
    expect(allRooms.length).to.equal(4)
  })
})

describe('searchResultsMsg', () => {
  it('should be a function', () => {
    expect(searchResultsMsg).to.be.a('function');
  });

  it('should return msg if valid date is given', () => {
    const date = '03/22/2023';
    const msg = searchResultsMsg(date);
    expect(msg).to.equal('There are 10 rooms available:')
  })

  it('should return error if invalid date is given', () => {
    const msg = searchResultsMsg();
    expect(msg).to.equal('Enter a valid date!');
  })

})