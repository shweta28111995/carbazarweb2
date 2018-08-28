import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {


  updatepassworddata={}
  constructor(private userService: UserService,private route: ActivatedRoute, private router:Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }
  updatepassword() {
    this.userService.updatepassword(this.updatepassworddata)
    .subscribe((res: any) => {
      this.toastr.success('Password Updated Successfully');
      debugger;
    
      if (res.status == true) {

        this.router.navigate(['login']);
        return false;
      }
    }, err => {
      debugger;
      this.toastr.error('everything is broken', 'Major Error', {
        timeOut: 3000
      });
    });
  }
}
