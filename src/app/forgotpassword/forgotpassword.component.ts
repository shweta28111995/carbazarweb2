import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { NgForm, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  email: string;
  message: string;
  constructor(private userService: UserService) {}

  ngOnInit() {

    this.email = localStorage.getItem('email');
    this.userService.getUserByEmail()
    .subscribe((res: any) => {
      debugger;
      this.message = res.message;
     });
  }
}
