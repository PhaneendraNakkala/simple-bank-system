import { Customer } from '../src/customer';

class Bank {
  private customers: Customer[] = [];

  public addCustomer(name: string, initialDeposit: number): void {
    const customer = new Customer(name, initialDeposit);
    this.customers.push(customer);
  }

  public getTotalBankBalance(): number {
    return this.customers.reduce((total, customer) => total + customer.getBalance(), 0);
  }
}

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