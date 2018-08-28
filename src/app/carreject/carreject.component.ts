import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-carreject',
  templateUrl: './carreject.component.html',
  styleUrls: ['./carreject.component.css']
})
export class CarrejectComponent implements OnInit {
  email; string;
  message: string;
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {}

  ngOnInit() {
    debugger;
    const body = {
    name: localStorage.getItem('firstname'),
    email: localStorage.getItem('email')
    };
    this.carService.sendRejectmail(body)
    .subscribe((res: any) => {
    console.log(res);
    debugger;
    if (res.status === 'Success') {
    this.router.navigate(['addtocart']);
    return false;
    }
    }, err => {
    debugger;
    console.log(err);
    });
  }


// send user detail and car detail by email to admin


  

}
