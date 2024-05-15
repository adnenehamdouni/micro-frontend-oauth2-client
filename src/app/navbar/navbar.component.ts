import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) { }


  publicScreen(event: Event) {
    event.preventDefault();
    this.router.navigate(['/public']);
  }

  privateScreen(event: Event) {
    event.preventDefault();
    this.router.navigate(['/private']);
  }

  login(event: Event) {
    event.preventDefault();
    // Add your login logic here
    this.router.navigate(['/auth/login']);

  }

  logout(event: Event) {
    event.preventDefault();
    // Add your logout logic here
  }

  get isAuthenticated() {
    let checkAuthentication = false
    this.authService.isAuthenticated().subscribe(isAuthenticated => {
      checkAuthentication = isAuthenticated;
    });

    return checkAuthentication;
  }


}
