import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product!: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) {}

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

  addToCart(){
    console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);

    const theCartItem = new CartItem(this.product);

    this.cartService.addToCart(theCartItem);
  }

}
