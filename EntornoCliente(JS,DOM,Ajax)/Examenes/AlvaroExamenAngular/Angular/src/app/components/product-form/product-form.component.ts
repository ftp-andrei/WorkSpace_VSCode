import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
    description: ['', [Validators.required, Validators.min(1), Validators.max(255)]],
    price: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private productService: ProductServiceService) { }

  onSubmit() {
    this.productService.postProduct(this.productForm.value);
  }
}
