import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthRequest} from "../models/auth-request";
import {AuthResponse} from "../models/auth-response";
import {MyAppState} from "../store/myApp.state";
import * as AuthSelectors from '../store/auth.selectors';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL de votre API
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient, private store: Store<MyAppState>) { }

  // ...

  connect(authRequest: AuthRequest): Observable<AuthResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, authRequest, { headers }).pipe(
      catchError(error => {
        console.error('Error occurred during login: ', error);
        return throwError(error);
      })
    );
  }

  login(authRequest: AuthRequest) {
    this.store.dispatch(AuthActions.login({ authRequest }));
  }

  // ...
  isAuthenticated() {
    return this.store.pipe(select(AuthSelectors.selectIsAuthenticated));
  }
}
