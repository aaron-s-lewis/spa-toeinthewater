import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { RegistrationComponent } from "../containers/registration/registration.component";

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatRippleModule,
  MatRadioModule,
  MatButtonToggleModule,
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GetStartedComponent } from "src/containers/get-started/get-started.component";
import { AppComponent } from "./app.component";
import { AvatarsComponent } from "src/containers/avatars/avatars.component";
import { Step1Component } from "src/containers/step1/step1.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CallBackComponent } from "src/containers/call-back/call-back.component";
import { EmailMeComponent } from "src/containers/email-me/email-me.component";
import { HeaderComponent } from "./components/header/header.component";


@NgModule({
  declarations: [
    RegistrationComponent,
    GetStartedComponent,
    AppComponent,
    AvatarsComponent,
    CallBackComponent,
    Step1Component,
    EmailMeComponent,
    HeaderComponent,
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
