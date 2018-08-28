import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  status = 'accepted';
  yes = 'yes';
  cars: any[] = [];
  car: any ;
  //carImage : any = "../../../../carbazaar/uploads/enterprise-1534937438960.jpg";
    constructor(private carservice: CarService) { }
  
    ngOnInit() {
      this.carservice.getCars().subscribe((data: any) => {
  
  debugger;
  
  
  this.cars = data.cars;
  
      });
    }

}
