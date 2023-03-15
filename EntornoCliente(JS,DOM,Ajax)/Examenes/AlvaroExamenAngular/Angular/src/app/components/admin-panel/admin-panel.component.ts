import { Component } from '@angular/core';
import { ProductCreate } from 'src/app/models/product.create.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  public data: ProductCreate[];
  constructor(private productService: ProductServiceService) {
    this.data = [];
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => this.data = res.data);
  }
}
