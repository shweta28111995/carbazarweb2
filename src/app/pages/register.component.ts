import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { NgForm, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(private spinner: NgxSpinnerService,private userService: UserService, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      Password: '',
      Email: '',
      FirstName: '',
      LastName: '',
      confirmPassword:''
    }
  }

  OnSubmit(): void {
    this.userService.registerUser(this.user)
    .subscribe((res: any) => {
      
      debugger;
       if (res.status === 'Success') {
  
        this.router.navigate(['signupsuccess']);
        this.toastr.success('Registered Successfully!');
        return false;
      }
      else{
        this.toastr.error(res.message);
      }
    }, err => {
      debugger;
      console.log(err);
    });
}
}
