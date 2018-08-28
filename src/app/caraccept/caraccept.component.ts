import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-caraccept',
  templateUrl: './caraccept.component.html',
  styleUrls: ['./caraccept.component.css']
})
export class CaracceptComponent implements OnInit {
  reg_id: string;
  status: string;
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {}
  
  ngOnInit() {
    debugger;
  this.reg_id = this.route.snapshot.paramMap.get('reg_id');
  this.carService.carAccept(this.reg_id)
  .subscribe((res: any) => {
  debugger;
  this.status = res.status;
  console.log(res);
  });
  
  
  
  }
}
