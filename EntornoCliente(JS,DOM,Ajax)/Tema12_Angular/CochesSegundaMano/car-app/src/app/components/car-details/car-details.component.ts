import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit{
  @Input() title= 'Detalles del coche';
  public data: Car[];
  constructor(private carService: CarService) {
    this.data= [];
  }

  ngOnInit(): void {
    this.carService.getCarByID(sessionStorage.getItem('id')?? "").subscribe(res => this.data = res.data);
  }
}