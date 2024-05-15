import { createAction, props } from '@ngrx/store';
import { AuthResponse } from '../models/auth-response';
import {AuthRequest} from "../models/auth-request";

export const login = createAction(
  '[Auth] Login',
  props<{ authRequest: AuthRequest }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ authResponse: AuthResponse }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);
