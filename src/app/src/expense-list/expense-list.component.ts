import {Component, OnInit} from '@angular/core';
import {ExpenseService} from '../expense.service';

export interface Expense {
  name: string;
  cost: number;
}

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  expenseList: Expense[] = this.expenseServie.expenses;

  constructor(private expenseServie: ExpenseService) {
  }

  ngOnInit() {
  }

}
