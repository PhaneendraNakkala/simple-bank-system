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

  public deposit(amount: number): void {
    if (amount < 0) {
      throw new Error('Deposit amount must be non-negative');
    }
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    } else {
      this.balance -= amount;
    }
  }

  public transfer(amount: number, recipient: Customer): void {
    this.withdraw(amount);
    recipient.deposit(amount);
  }
}