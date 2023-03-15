import { Component } from '@angular/core';
import { ProductCreate } from 'src/app/models/product.create.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public data: ProductCreate[];
  constructor(private productService: ProductServiceService) {
    this.data = [];
  }
  ngOnInit(): void {

    this.productService.getProducts().subscribe(res => this.data = res.data);
  }
  // onSubmit() {
  //   if (this.searchForm.value.buscador) {
  //     let busqueda = this.searchForm.value.buscador;
  //     this.data = this.data.filter(
  //       (element) => element.marca.startsWith(this.searchForm.value.buscador + '') || element.modelo.startsWith(this.searchForm.value.buscador + '')
  //     );
  //   } else {
  //     this.carService.getCars().subscribe(res => this.data = res.data);
  //   }
  // }
}
