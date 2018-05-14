import { Component, OnInit, NgZone } from '@angular/core';

import { USERS } from '../mock-users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users = USERS;

  loginForm = {
    email: '',
    password: ''
  }

  logIn() {
    // this.users.some((item) => {
    //   if(item.email === this.loginForm.email) {
    //     if (item.password === this.loginForm.password) {
    //       localStorage.setItem('myApp.currentUser', JSON.stringify(item));
    //       this.router.navigateByUrl(`/user/${item.id}`);
    //     } else {
    //       alert(`Password is not correct for user ${item.email}`);
    //       return false;
    //     }
    //   } else {
    //     return alert(`User: ${this.loginForm.email} not found`);
    //   }
    // });
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
