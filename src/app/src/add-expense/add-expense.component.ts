import {Component, OnInit} from '@angular/core';
import {ExpenseService} from '../expense.service';
import {Expense} from '../expense-list/expense-list.component';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  name = '';
  cost = 0;

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
  }

  addToList() {
    const expense: Expense = {
      name: this.name,
      cost: this.cost
    };
    this.expenseService.addExpense(expense);

  }

}
