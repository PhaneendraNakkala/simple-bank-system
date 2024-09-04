import { Customer } from './customer.ts';

export class Bank {
  private customers: Customer[] = [];

  public addCustomer(name: string, initialDeposit: number): void {
    const customer = new Customer(name, initialDeposit);
    this.customers.push(customer);
  }

  public getTotalBankBalance(): number {
    return this.customers.reduce((total, customer) => total + customer.getBalance(), 0);
  }
}