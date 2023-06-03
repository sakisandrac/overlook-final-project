import chai from 'chai';
const expect = chai.expect;
import { filterBookings, getAvailableRooms, searchResultsMsg } from '../src/newBookings';
import {bookingData, roomData} from './sampleData'

describe('Bookings', () => {

  describe('filterBookings', () => {
    it('should be a function', () => {
      expect(filterBookings).to.be.a('function');
    });

    it('should filter out bookings based on date', () => {
      let bookings = filterBookings(bookingData, '2023/03/22');
      expect(bookings[0].id).to.equal('1gvvbn0i7k55hl6hh');
    });

    it('should be empty if there are no bookings for that date', () => {
      let bookings = filterBookings(bookingData, '2024/03/22');
      expect(bookings).to.deep.equal([]);
    });
  })

  describe('getAvailableRooms', () => {
    it('should be a function', () => {
      expect(getAvailableRooms).to.be.a('function');
    });

    it('should return available rooms', () => {
      let bookedRooms = filterBookings(bookingData, '2022/04/22')
      let allRooms = getAvailableRooms(bookedRooms, roomData);

      expect(allRooms.length).to.equal(7);
    });

    it('it should be empty if no rooms are available', () => {
      let bookedRooms = filterBookings(bookingData, '2023/03/22')
      let allRooms = getAvailableRooms(bookedRooms, roomData);

      expect(allRooms.length).to.equal(0);
    });

  })

  describe('searchResultsMsg', () => {
    it('should be a function', () => {
      expect(searchResultsMsg).to.be.a('function');
    });

    it('should return msg if valid date is given', () => {
      const date = '03/22/2023';
      const msg = searchResultsMsg(date);
      expect(msg).to.equal('There are 10 rooms available:')
    });

    it('should return error if invalid date is given', () => {
      const msg = searchResultsMsg();
      expect(msg).to.equal('Enter a valid date!');
    });

    it('should display message if no rooms available', () => {
      let bookedRooms = filterBookings(bookingData, '2023/03/22')
      let results = getAvailableRooms(bookedRooms, roomData);
      let msg = searchResultsMsg(results)

      expect(msg).to.equal('We are so sorry! There are no rooms avaiable for this date, please select a different date.');
    });

  });
})