# Banking System

## Overview

This project implements a simple banking system with two main components:
- `Customer`: Manages individual customer accounts.
- `Bank`: Manages multiple customers and provides operations like calculating the total bank balance.

## Design Choices

### `Customer` Class

- **Attributes**:
   - `name`: The name of the customer.
   - `balance`: The balance of the customer's account.

- **Methods**:
   - `constructor(name: string, initialDeposit: number)`: Initializes a customer with a name and an initial deposit. Throws an error if the initial deposit is negative.
   - `getName()`: Returns the customer's name.
   - `getBalance()`: Returns the customer's balance.
   - `deposit(amount: number)`: Deposits a specified amount into the customer's account. Throws an error if the amount is negative.
   - `withdraw(amount: number)`: Withdraws a specified amount from the customer's account, ensuring the withdrawal does not exceed the current balance. Throws an error if the amount is negative or insufficient funds are available.
   - `transfer(amount: number, recipient: Customer)`: Transfers a specified amount from this customer to another customer. Throws an error if the amount is negative or if there are insufficient funds.

### `Bank` Class

- **Attributes**:
   - `customers`: An array that stores all customer instances.

- **Methods**:
   - `addCustomer(name: string, initialDeposit: number)`: Adds a new customer to the bank. Throws an error if the initial deposit is negative.
   - `getTotalBankBalance()`: Calculates and returns the total balance of all customers.

## Prerequisites
1. **Ensure the following installed**
   ```bash
   Node.js v22.7.0 
   npm 10.8.2
   tsc 5.5.4
2. **Clone the repository**:
   ```bash
   git clone git@github.com:PhaneendraNakkala/simple-bank-system.git
   cd simple-bank-system
   
### Running Tests

```bash
   npm test

