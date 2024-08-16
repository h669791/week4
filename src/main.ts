import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';  // Import Routes
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { AccountComponent } from './app/account/account.component';

// Define routes with explicit typing
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
