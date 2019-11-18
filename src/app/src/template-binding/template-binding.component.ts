import {AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-template-binding',
  templateUrl: './template-binding.component.html',
  styleUrls: ['./template-binding.component.scss']
})
export class TemplateBindingComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('paragraph', {static: false}) templateParagraph;

  @ContentChild('AppBound', {static: false}) appBound;

  constructor() {
    console.log(this.templateParagraph);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.templateParagraph);
    this.templateParagraph.nativeElement.textContent = 'Something completly different';

  }

  ngAfterContentInit(): void {
    console.log(this.appBound);
    this.appBound.nativeElement.textContent = 'Also something new';
  }

}
