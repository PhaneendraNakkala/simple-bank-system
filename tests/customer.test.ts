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

  describe('#deposit', () => {
    it('should deposit money and update the balance', () => {
      const customer = new Customer('Jane Doe', 500);
      customer.deposit(200);
      expect(customer.getBalance()).toBe(700);
    });

    it('should throw an error when amount is negative', () => {
      const customer = new Customer('John Doe', 100);
      expect(() => customer.deposit(-100)).toThrow('Deposit amount must be non-negative');
    });
  });

  describe('#withdraw', () => {
    it('should withdraw money when balance is sufficient', () => {
      const customer = new Customer('John Smith', 1000);
      customer.withdraw(300);
      expect(customer.getBalance()).toBe(700);
    });

    it('should throw an error when amount is negative', () => {
      const customer = new Customer('John Doe', 100);
      expect(() => customer.withdraw(-100)).toThrow('Withdraw amount must be non-negative');
    });

    it('should throw an error when withdrawing more than the balance', () => {
      const customer = new Customer('Jane Smith', 500);
      expect(() => customer.withdraw(600)).toThrow('Insufficient funds');
    });


  });

  describe('#transfer', () => {
    it('should transfer money between customers when balance is sufficient', () => {
      const customer1 = new Customer('John Doe', 1000);
      const customer2 = new Customer('Jane Doe', 500);
      customer1.transfer(300, customer2);
      expect(customer1.getBalance()).toBe(700);
      expect(customer2.getBalance()).toBe(800);
    });

    it('should throw an error when transfer amount is greater than balance', () => {
      const customer1 = new Customer('John Doe', 100);
      const customer2 = new Customer('Jane Doe', 500);
      expect(() => customer1.transfer(200, customer2)).toThrow('Insufficient funds');
    });

  });

});