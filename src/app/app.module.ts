import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { RegistrationComponent } from "../containers/registration/registration.component";

import {
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatRippleModule,
  MatRadioModule,
  MatButtonToggleModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GetStartedComponent } from "src/containers/get-started/get-started.component";
import { AppComponent } from "./app.component";
import { AvatarsComponent } from "src/containers/avatars/avatars.component";
import { Step1Component } from "src/containers/step1/step1.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { UserProfileService } from "./store/services.ts/user.services";
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RegistrationComponent,
    GetStartedComponent,
    AppComponent,
    AvatarsComponent,
    Step1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatStepperModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    EffectsModule.forRoot([UserEffects]),
    HttpClientModule
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
