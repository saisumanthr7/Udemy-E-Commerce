import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checkoutFormGroup!: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        expirationMonth: [''],
        expirationYear: [''],
        securityCode: ['']
      })

    })
  }

  onSubmit(){
    console.log("Handling submission");
    if(this.checkoutFormGroup!=null){
      console.log(this.checkoutFormGroup.get('customer')?.value);
    }
  }

  copyShippingAddressToBillingAddress(event: any){
    
    if(event.target.checked){
      this.checkoutFormGroup.controls['billingAddress']
          .setValue(this.checkoutFormGroup.controls['shippingAddress.value'].value);
    }else {
      this.checkoutFormGroup.controls['billingAddress'].reset();
    }
  }

}
