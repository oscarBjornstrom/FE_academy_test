import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Apptitle = 'session1';


  alertMeAlso() {
    alert('Hello i am in the app component');
  }
}
