import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log("Check if user is authenticated.");
    this.authService.isAuthenticated().subscribe(isAuthenticated => {
      console.log("isAuthenticated = ", isAuthenticated);
      if (!isAuthenticated) {
        console.log("User is not authenticated. Redirect to login screen.");
        this.router.navigate(['/auth/login']);
      } else {
        console.log("User is authenticated. Redirect to private screen.");
        this.router.navigate(['/private']);
      }
    });
  }

}
