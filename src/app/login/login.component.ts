import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showSuccessAlert: boolean = false;
  showErrorAlert: boolean = false;
  showEmptyAlert: boolean = false;

  constructor(private router: Router) {}

  login() {
    // Hardcoded username and password for demonstration purposes
    const hardcodedUsername = 'admin';
    const hardcodedPassword = '123123';

    if (
      this.username === hardcodedUsername &&
      this.password === hardcodedPassword
    ) {
      this.showSuccessAlert = true;
      this.showErrorAlert = false;
      this.showEmptyAlert = false;
      this.router.navigate(['/home']);
    } else if (this.username === '' && this.password === '') {
      this.showSuccessAlert = false;
      this.showErrorAlert = false;
      this.showEmptyAlert = true;
    } else {
      this.showSuccessAlert = false;
      this.showErrorAlert = true;
      this.showEmptyAlert = false;
    }

    // Clear the input fields after attempting to login
    this.username = '';
    this.password = '';
  }
}
