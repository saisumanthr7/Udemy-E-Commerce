import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2ShopValidators {

    // Whitespace validation

    static notOnlyWhitespace(control: FormControl): ValidationErrors {

        // Check if string only contains whitespace
        if((control.value !=null ) && (control.value.trim().length === 0)){
            return {'notOnlyWhitespace': true};
        }else{
            return {};
        }

    }
}
