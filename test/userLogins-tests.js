import { checkCredentials, matchPassword, matchUser, userLogins, getUserId } from '../src/login';
import chai from 'chai';
const expect = chai.expect;

describe('User Login', () => {
  describe('userLogins', () => {
    it('should return a user object based on id passed in', () => {
      expect(userLogins(50)).to.deep.equal({customer50: { username: 'customer50', password: 'overlook2021'}});
    });
    it('should be undefined if no id is passed in', () => {
      expect(userLogins()).to.be.undefined;
    });
  });
  
  describe('getUserId', () => {
    it('should return a user id based on username', () => {
      expect(getUserId('customer50')).to.equal(50);
    });
    it('should be undefined if wrong username is passed in', () => {
      expect(getUserId('customer2020')).to.be.undefined;
    });
  });

  describe('checkCredentials', () => {
    it('should be able to check if there are valid username and password inputs', () => {
      expect(checkCredentials('customer50', 'overlook2021')).to.be.true;
    });

    it('should return error message if password was not entered', () => {
      expect(checkCredentials('customer')).to.equal('Please enter both username and password!');
    });

    it('should return error message if username not entered', () => {
      expect(checkCredentials('username')).to.equal('Please enter both username and password!');
    });

    it('should return error message if password not entered', () => {
      expect(checkCredentials('password')).to.equal('Please enter both username and password!');
    });
  });


  describe('matchUser', () => {
    it("should check username's password if username is found", () => {
      expect(matchUser('customer50', 'password')).to.be.undefined;
    });

    it('should return message if username is not found', () => {
      expect(matchUser('hi', 'password')).to.equal('Username not found');
    });

    it('should return true if login credentials are correct', () => {
      expect(matchUser('customer50', 'overlook2021')).to.be.true;
    });
  });

  describe('matchPassword', () => {
    it('should be able to check if username and password is valid', () => {
      expect(matchPassword('customer50', 'overlook2021')).to.be.true;
    });

    it('should be able to check if username is valid, but password is invalid', () => {
      expect(matchUser('customer50', 'password')).to.be.undefined;
    });

    it('should be able to check if username is invalid, but password is valid', () => {
      expect(matchUser('customer', 'overlook2021')).to.equal('Username not found');
    });
  });
});