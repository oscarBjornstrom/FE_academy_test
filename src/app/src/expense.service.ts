import {Injectable} from '@angular/core';
import {Expense} from './expense-list/expense-list.component';

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  expenses: Expense[] = [
    {cost: 1000, name: 'computer'},
    {cost: 12, name: 'coffe'},
    {cost: 5, name: 'apple'}
  ];

  constructor() {
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }
}
