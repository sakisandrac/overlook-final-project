import chai from 'chai';
const expect = chai.expect;
import { setMonth, setDay, getDate } from '../src/get-dates';

describe('Get Dates', () => {
  const today = new Date();

  describe('setMonth', () => {
    it('should return the month in double digit form', () => {
      expect(setMonth(today).length).to.equal(2);
    });

    it('should return the month as a string', () => {
      expect(setMonth(today)).to.be.a('string');
    });
  });

  describe('setDay', () => {
    it('should return the day in double digit form', () => {
      expect(setDay(today).length).to.equal(2);
    });

    it('should return the day as a string', () => {
      expect(setDay(today)).to.be.a('string');
    });
  });

  describe('getDate', () => {
    it('should return the date with 8 digits', () => {
      expect(getDate(today).length).to.equal(8);
    });

    it('should return the date as a string', () => {
      expect(getDate(today)).to.be.a('string');
    });
  });
 })