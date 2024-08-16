import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  // Hard-coded user credentials

  users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
  ];

  // Variables to bind with the form inputs
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Inject the Router service
  constructor(private router: Router) {}

  // Login function
  login() {
    // Check if the credentials match
    const user = this.users.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      // If credentials match, navigate to the account page
      this.router.navigate(['/account']);
    } else {
      // If credentials do not match, display an error message
      this.errorMessage = 'Invalid username or password';
    }
  }
}
