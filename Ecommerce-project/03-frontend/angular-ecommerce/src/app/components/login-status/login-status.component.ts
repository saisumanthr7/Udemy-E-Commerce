import { Component, Inject } from '@angular/core';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrl: './login-status.component.css'
})
export class LoginStatusComponent {

  isAuthenticated: boolean = false;
  userFullName: string = '';

  constructor(private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth){}

    ngOnInit(): void {

      // Subscribe to authenctication state changes
      this.oktaAuthService.authState$.subscribe(
        (result) => {
          this.isAuthenticated = result.isAuthenticated!;
          this.getUserDetails();
        }

      );
    }

  getUserDetails() {
    if(this.isAuthenticated){

      // Fetch the logged in user details (user's claims)
      // User full name is exposed as a property name

      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;
        }
      )
    }
  }

  logout(){
    // Terminates the session with okta and removes current tokens.
    this.oktaAuth.signOut();
  }
}