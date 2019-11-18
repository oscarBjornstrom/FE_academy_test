import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.scss']
})
export class BindingTestComponent implements OnInit {

  @Input() title: string;
  @Output() alertInParent = new EventEmitter();
  inputValue = '';

  constructor() {
  }

  ngOnInit() {

  }

  setValue(newValue) {
    this.inputValue = newValue;
  }

  alertMe() {
    this.alertInParent.emit();
  }


}
