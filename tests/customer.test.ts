import { Customer } from '../src/customer.ts';

describe('Customer', () => {

  describe('#create customer', () => {
    it('should create a customer with a name and initial balance', () => {
      const customer = new Customer('John Doe', 1000);
      expect(customer.getName()).toBe('John Doe');
      expect(customer.getBalance()).toBe(1000);
    });

    it('should throw an error when initial deposit is negative', () => {
      expect(() => new Customer('John Doe', -100)).toThrow('Initial deposit must be non-negative');
    });

  });

});