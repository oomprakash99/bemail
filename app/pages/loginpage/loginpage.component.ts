import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginType } from 'src/app/interfaces/loginInterface';
import { accounts } from 'src/app/testdata/loginAccounts';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  LoginForm!:FormGroup;

  validUsername!: string;
  validPassword!: string;

  // loginAccount = [] as any;

  constructor(private router: Router) { }

  loginCase = accounts;


  ngOnInit(): void {
    this.LoginForm= new FormGroup({

      email:new FormControl([Validators.required],[Validators.email]),
      password:new FormControl([Validators.required],[Validators.minLength(10)])
      
    });
   }



  login() {

    var Email = this.loginCase.find((Email) => Email.username === this.validUsername);
    var Access = this.loginCase.find((Access) => Access.password === this.validPassword);

    if (Email?.username === "op@bemail.com" && Access?.password === "Hello@1") 
    {
      this.router.navigate(['/mailbox']);
    }

  }
}



