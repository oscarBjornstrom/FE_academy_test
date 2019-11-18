import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fruit-item',
  templateUrl: './fruit-item.component.html',
  styleUrls: ['./fruit-item.component.scss']
})
export class FruitItemComponent implements OnInit {
  @Input() fruit;
  constructor() { }

  ngOnInit() {
  }

}
