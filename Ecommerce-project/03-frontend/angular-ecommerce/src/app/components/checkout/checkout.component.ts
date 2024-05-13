import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Luv2ShopFormService } from '../../services/luv2-shop-form.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checkoutFormGroup!: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];
  
  constructor(private formBuilder: FormBuilder,
              private luv2ShopService: Luv2ShopFormService){}

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

    });


    const startMonth : number = new Date().getMonth() + 1;
    console.log("start month: " + startMonth);

    this.luv2ShopService.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieved credit card months: " + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    );

    this.luv2ShopService.getCreditCardYears().subscribe(
      data => {
        console.log("Retrieved credit card years: " + JSON.stringify(data));
        this.creditCardYears = data;
      }
    )

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

  handleMonthAndYear() {
    const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');

    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup?.value.expirationYear);

    let startMonth: number;

    if(currentYear === selectedYear){
      startMonth = new Date().getMonth() + 1;
    }else {
      startMonth = 1;
    }

    this.luv2ShopService.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieved credit cart months: " + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    )
  }

}
