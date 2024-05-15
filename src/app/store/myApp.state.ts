// src/app/store/state.ts
export interface AppState {
  auth: {
    isAuthenticated: boolean;
    token: string | null;
    error: any;
    // Ajoutez ici d'autres propriétés de l'état d'authentification si nécessaire
  };
  // Ajoutez ici d'autres propriétés de l'état de l'application si nécessaire

}

export const initialState: AppState = {
  auth: {
    isAuthenticated: false,
    token: null,
    error: null
  }
};
