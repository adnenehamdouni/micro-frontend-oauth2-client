// src/app/store/state.ts
export interface MyAppState {
  isAuthenticated: boolean;
  token: string | null;
  error: any;
}

export const initialState: MyAppState = {
  isAuthenticated: false,
  token: null,
  error: null

};
