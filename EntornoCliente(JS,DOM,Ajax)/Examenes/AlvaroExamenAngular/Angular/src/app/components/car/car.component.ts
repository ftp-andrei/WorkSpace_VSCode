import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  public data: Car[];
  searchForm = this.fb.group({
    buscador: ['', [Validators.required]],
  });
  constructor(private carService: CarService, private fb: FormBuilder) {
    this.data = [];
  }
  ngOnInit(): void {
    this.carService.getCars().subscribe(res => this.data = res.data);
  }
  onSubmit() {
    if(this.searchForm.value.buscador){
      let busqueda= this.searchForm.value.buscador ;
      // this.data=this.data.filter(
      //   // (element) => element.marca.startsWith(this.searchForm.value.buscador+'') || element.modelo.startsWith(this.searchForm.value.buscador+'') 
      // );
    }else{
      this.carService.getCars().subscribe(res => this.data = res.data);
    }
  }
  setAttribute(id: string) {
    // document.getElementById(id)?.setAttribute('data-bs-target',id);

  }
}
