import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-usercarlisting',
  templateUrl: './usercarlisting.component.html',
  styleUrls: ['./usercarlisting.component.css']
})
export class UsercarlistingComponent implements OnInit {
  user: any[];
  Carlisting: any[];
  userid = {};
  status={};
  constructor( private userService: UserService,
    private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService ) { }

  ngOnInit() {

   
  this.userid = localStorage.getItem('_id');
    this.userService.getCarUserList(this.userid)
    
    .subscribe((res: any) => {
      this.Carlisting = res.cars;
      debugger;
      console.log( this.Carlisting);
     });

  }
  deletecarbyuser(regno) {
    debugger;
    this.userService.deleteCarbyuser(regno)
    .subscribe(res => {
    this.spinner.hide();
    debugger;
    console.log(res);
    if (res.status === 'Success') {
    this.toastr.success(res.message);
    console.log(res.status);
    this.router.navigate(['/userlisting']);
    // return false;
    } else {
    this.toastr.error(res.message);
    }
    }, err => {
    console.log(err);
    });
    
    }
    
    }

