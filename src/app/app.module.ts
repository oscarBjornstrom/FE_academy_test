import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home.component';
import { BindingTestComponent } from './src/binding-test/binding-test.component';
import {FormsModule} from '@angular/forms';
import { TemplateBindingComponent } from './src/template-binding/template-binding.component';
import { DirectivesTestComponent } from './src/directives-test/directives-test.component';
import { FruitItemComponent } from './src/fruit-item/fruit-item.component';

import { ServiceTestComponent } from './src/service-test/service-test.component';
import { AddExpenseComponent } from './src/add-expense/add-expense.component';
import { ExpenseListComponent } from './src/expense-list/expense-list.component';
import {ExpenseService} from './src/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BindingTestComponent,
    TemplateBindingComponent,
    DirectivesTestComponent,
    FruitItemComponent,
    ServiceTestComponent,
    AddExpenseComponent,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
