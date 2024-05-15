import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Store } from '@ngrx/store';
import { Router } from "@angular/router";
import { AuthRequest } from "../../models/auth-request";
import * as AuthActions from '../../store/auth.actions';
import { MyAppState } from '../../store/myApp.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<MyAppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const authRequest = new AuthRequest();
      authRequest.username = this.loginForm.value.username;
      authRequest.password = this.loginForm.value.password;

      // Dispatch the login action
      this.store.dispatch(AuthActions.login({ authRequest }));
    } else {
      console.error('Form is not valid');
      // Handle invalid form, e.g. show a message to the user
    }
  }
}
