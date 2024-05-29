import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(theCartItem: CartItem){

    // Check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem | undefined = undefined; 

    if(this.cartItems.length > 0){
      
    // find the item in the cart based on the item id
    // for(let tempCartItem of this.cartItems){
    //   if(tempCartItem.id === theCartItem.id){
    //     existingCartItem = tempCartItem;
    //     break;
    //   }
    // }

    // Refactoring the above for loop to use array find() method
    existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id);

    // check if we found the item
    alreadyExistsInCart = (existingCartItem != null);

    }

    if(alreadyExistsInCart && existingCartItem !== undefined){
      existingCartItem.quantity++;
    }else {
      //just add the item to the array
      this.cartItems.push(theCartItem);
    }

    // compute cart total price and total quantity
    this.computeCartTotals();
  }

  computeCartTotals() {
    
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    // push the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    
  // log cart data for debugging
  this.logCarData(totalPriceValue, totalQuantityValue);
  }

  logCarData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('Contents of the cart');

    for(let tempCartItem of this.cartItems){
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity},
                    unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuanity: ${totalQuantityValue}`);
    console.log('_________')
  }

  decrementQuantity(theCartItem: CartItem){
    theCartItem.quantity--;

    if(theCartItem.quantity ===0){
      this.remove(theCartItem);
    }else{
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem){

    // Get the index of item in the array
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id);

    // if the index is found, remove the item from the array at the given index
    if(itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }

}


