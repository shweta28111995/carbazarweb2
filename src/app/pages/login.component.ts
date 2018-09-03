import { Component, OnInit } from '@angular/core';
import  { UserService } from '../services/user.service';
import { Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUserData = { email: '' , password:''}; 
  

  constructor(private spinner: NgxSpinnerService,private userService: UserService,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    
    
  }
  loginUser(){
    this.spinner.show();
    this.userService.loginUser(this.loginUserData)
    .subscribe(res => {
        this.spinner.hide();
      debugger;
      localStorage.setItem('email', res.user.email);
      localStorage.setItem('firstname', res.user.firstname);
      localStorage.setItem('lastname', res.user.lastname);
      localStorage.setItem('_id', res.user._id);
      localStorage.setItem('password', res.user.password);
      localStorage.setItem('userToken', res.user.token);
      this.loginUser = res.users;
      if (res.auth == true) {
        
        this.toastr.success('Login Successfully!');
        this.router.navigate(['usercarlisting']);
        return false;
      }
      else{
        this.toastr.error("Invalid Details");
      }
    }, err => {
      this.toastr.error('everything is broken', 'Major Error', {
        timeOut: 3000
      });
    });
  }
}
