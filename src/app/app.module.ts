import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from '../containers/registration/registration.component';

import {
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatRippleModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetStartedComponent } from 'src/containers/get-started/get-started.component';
import { AppComponent } from './app.component';
import { AvatarsComponent } from 'src/containers/avatars/avatars.component';
import { Step1Component } from 'src/containers/step1/step1.component';
import { Step2Component } from 'src/containers/step2/step2.component';
import { Step3Component } from 'src/containers/step3/step3.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [RegistrationComponent, GetStartedComponent, AppComponent,AvatarsComponent,Step1Component,Step2Component,Step3Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatStepperModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
