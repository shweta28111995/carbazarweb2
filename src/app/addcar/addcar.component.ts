import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
import { CarService } from '../services/car.service';
import { Car } from '../../shared/car.model';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  car: Car;
  user = {};
  fileToUpload: File = null;
  logo : any;
  id:string;
  status: string;

  constructor(private route: ActivatedRoute,private spinner: NgxSpinnerService,private carService: CarService, private toastr: ToastrService,private router:Router) { }

  ngOnInit() {
    
    this.resetForm();

    // this.spinner.show();

    // setTimeout(() => {
    //     /** spinner ends after 5 seconds */
    //     this.spinner.hide();
    // }, 5000);
  }
  

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.car={
      Registration_no: '',
      Manufacturer: '',
      Model: '',
      Speedometer: '',
      userid:localStorage.getItem('_id'),
      Cost: '',
      
    }
}

// fileUploader(event) {
//   const elem = event.target;
//   if (elem.files.length > 0) {
//   console.log(elem.files[0]);
//   }
//   }


  handleFileInput(file: FileList) {
    debugger
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.logo = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  
saveCar() {
  //this.id = this.route.snapshot.paramMap.get('id');
  debugger;

  this.carService.registerCar(this.fileToUpload,this.car)
  .subscribe((res: any) => {
    console.log(res);
  

    debugger;
     if (res.status === 'Success') {
       debugger;
      const regid=res.cars.registration_no;
      console.log(regid);
      this.router.navigate(['usercarlisting']);
      this.toastr.success('Add car Successfully!');
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


