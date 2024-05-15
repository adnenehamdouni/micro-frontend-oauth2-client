import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {KeycloakAngularModule} from "keycloak-angular";
import {HttpClientModule} from "@angular/common/http";

import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environment';
import {localStorageSync} from "ngrx-store-localstorage";
import {CommonModule} from "@angular/common"; // import the environment file

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        NavbarComponent,
        KeycloakAngularModule,
        HttpClientModule, //

        // ...
        StoreModule.forRoot({ auth: authReducer }, { metaReducers }),
        EffectsModule.forRoot([AuthEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [] // Add this line

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
