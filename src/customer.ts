export class Customer {
  private name: string;
  private balance: number;

  constructor(name: string, initialDeposit: number) {
    if (initialDeposit < 0) {
      throw new Error('Initial deposit must be non-negative');
    }
    this.name = name;
    this.balance = initialDeposit;
  }

  public getName() {
    return this.name;
  }

  public getBalance() {
    return this.balance;
  }
}