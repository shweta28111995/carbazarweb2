import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }

  authSignOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
