import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import {DisplayComponent} from "./display/display.component";
import {KeycloakService} from "keycloak-angular";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HttpClientModule
  ],
  providers: [KeycloakService]
})
export class PrivateModule { }
