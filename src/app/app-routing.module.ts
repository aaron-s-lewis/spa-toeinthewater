import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from '../containers/registration/registration.component';
import { GetStartedComponent } from 'src/containers/get-started/get-started.component';
import { AppComponent } from './app.component';
import { AvatarsComponent } from 'src/containers/avatars/avatars.component';
import { Step1Component } from 'src/containers/step1/step1.component';
import { CallBackComponent } from 'src/containers/call-back/call-back.component';
import { EmailMeComponent } from 'src/containers/email-me/email-me.component';
import { HomeComponent } from 'src/containers/home/home.component';
import { ConfirmedComponent } from 'src/containers/confirmed/confirmed.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full'
  },
    {        path: 'email-me',        component:  EmailMeComponent      },
    {        path: 'call-back',        component:  CallBackComponent      },
    {        path: 'get-started',        component:  GetStartedComponent      },
    {        path: 'registration',        component:  RegistrationComponent      },
    {        path: 'avatars',        component:  AvatarsComponent      },
    {        path: 'step1',        component:  Step1Component      },
    {        path: 'home',        component:  HomeComponent      },
    {        path: 'confirmed',        component:  ConfirmedComponent      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
