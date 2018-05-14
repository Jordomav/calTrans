import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor () {
    
  }
  
  title = 'app';

  user = JSON.parse(localStorage.getItem('myApp.currentUser'));
  

  checkUser() {
    if(this.user === null) {
      return false;
    } else {
      return true;
    }
  }
}
