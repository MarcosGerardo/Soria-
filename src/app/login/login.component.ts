import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() {
   
   }
   email: string | undefined;
  password: string | undefined;
   login() {
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit(): void {
  }

}
