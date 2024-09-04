import { Customer } from '../src/customer.ts';

describe('Customer', () => {
  it('should create a customer with a name and initial balance', () => {
    const customer = new Customer('John Doe', 1000);
    expect(customer.getName()).toBe('John Doe');
    expect(customer.getBalance()).toBe(1000);
  });
});