export class Customer {
  private name: string;
  private balance: number;

  constructor(name: string, initialDeposit: number) {
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