import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!: FormGroup;
  model: Login = { email: "login", password: "login@123" }  
  constructor(private fb: FormBuilder,private router:Router) { }
  ngOnInit(){
  this.loginform = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });
  localStorage.setItem('isloggedin','false');    
}
get f() { 
  return this.loginform.controls;
}  

login() {  
  if (this.f['email'].value == this.model.email && this.f['password'].value == this.model.password) {  
    alert("Login successful");   
    localStorage.setItem('isloggedin', "true");  
    this.router.navigate(["/dash"]);  
  }  
  else{
   alert("Invalid email & password");
  }
}

}

