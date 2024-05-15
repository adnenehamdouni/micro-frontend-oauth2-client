// src/app/store/auth.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {MyAppState} from "./myApp.state";

export const selectAuthState = createFeatureSelector<MyAppState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: MyAppState) => state.isAuthenticated
);
