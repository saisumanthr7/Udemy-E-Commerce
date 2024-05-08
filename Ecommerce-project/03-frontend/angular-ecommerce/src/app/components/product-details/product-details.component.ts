import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product!: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.handleProductDetails();
    })
  }

  handleProductDetails() {
    
    // Get the "id" param string. Convert string to a number using "+" symbol
    const theProdcutId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProdcutId).subscribe(
      (data) => {
        this.product = data;
      })
  }

}
