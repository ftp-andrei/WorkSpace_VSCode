import { Component } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { productService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public data: product[];
  constructor(private productService: productService) {
    this.data = [];
  }
  ngOnInit(): void {
    this.productService.getproductData().subscribe(res => this.data = res.data);
  }
}