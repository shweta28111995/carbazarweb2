import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Car } from '../../shared/car.model';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {
  car: Car;
  regid: string;
  status: string;


  constructor(private route: ActivatedRoute,private spinner: NgxSpinnerService,private carService: CarService, private toastr: ToastrService,private router:Router) { }

  //this.id = this.route.paramMap.get('id');

  ngOnInit() {
  
    this.regid = this.route.snapshot.paramMap.get('regid');
  }

  saveCar(){
    this.carService.carImage(this.regid)
    .subscribe((res: any) => {
      console.log(res);
    debugger;
    if (res.status === 'Success') {
      debugger;
   // this.regid = this.route.snapshot.paramMap.get('regid');
    this.carService.carImage(this.regid)
  
    debugger;
    this.status = res.status;
    console.log(res);
    this.router.navigate['usercarlisting'];
    return false;
  }
    else{
      console.log("invalid");
    }
  }, err => {
    debugger;
    console.log(err);
  });
 
  }

}

