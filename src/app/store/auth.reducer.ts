import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './auth.actions';
import { initialState, MyAppState } from './myApp.state';

export const authReducer = createReducer<MyAppState>(
  initialState,
  on(login, state => ({ ...state, isAuthenticated: false })),
  on(loginSuccess, (state, { authResponse }) => ({ ...state, isAuthenticated: true, token: authResponse.token })),
  on(loginFailure, (state, { error }) => ({ ...state, isAuthenticated: false, error }))
);
