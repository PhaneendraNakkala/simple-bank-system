import { Bank } from '../src/bank';

describe('bank', () => {
  it('should add a customer and calculate total bank balance', () => {
    const bank = new Bank();
    bank.addCustomer('Adam', 1000);
    bank.addCustomer('John', 2000);
    expect(bank.getTotalBankBalance()).toBe(3000);
  });

  it('should return zero for total bank balance when no customers are added', () => {
    const bank = new Bank();
    expect(bank.getTotalBankBalance()).toBe(0);
  });
});