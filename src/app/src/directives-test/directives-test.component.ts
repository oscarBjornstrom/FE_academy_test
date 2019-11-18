import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives-test',
  templateUrl: './directives-test.component.html',
  styleUrls: ['./directives-test.component.scss']
})
export class DirectivesTestComponent implements OnInit {
  toggleTheDiv = false;

  iterableArr = ['Apple', 'Banana', 'Oranges'];
  switchVar = 'd';
  constructor() {
  }

  ngOnInit() {
  }

}
