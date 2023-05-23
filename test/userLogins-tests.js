import { userLogins } from '../src/data/userLogins'
import { checkCredentials, matchPassword, matchUser } from '../src/login'
import chai from 'chai';
const expect = chai.expect;

describe('User Login', () => {
  describe('checkCredentials', () => {
    it('should be able to check if there are valid username and password inputs', () => {
      expect(checkCredentials('hello', 'password')).to.equal('valid username & password')
    });

    it('should return error message if either username or password was not entered', () => {
      expect(checkCredentials('hi')).to.equal('Please enter both username and password!')
    });
  });

  describe('matchUser', () => {
    it('should be able to check if username is valid', () => {
      expect(matchUser('customer50', 'password')).to.equal('Valid username')
    });

    it('should return message if username is not found', () => {
      expect(matchUser('hi', 'password')).to.equal('Username not found')
    });
  });

  describe('matchPassword', () => {
    it('should be able to check if password is valid', () => {
      expect(matchPassword('customer50', 'overlook2021')).to.be.true
    });

    it('should return message if password is incorrect', () => {
      expect(matchPassword('customer50', 'password')).to.be.undefined
    });
  });


})