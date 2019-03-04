import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from '../containers/registration/registration.component';
import { GetStartedComponent } from 'src/containers/get-started/get-started.component';
import { AppComponent } from './app.component';
import { AvatarsComponent } from 'src/containers/avatars/avatars.component';
import { Step1Component } from 'src/containers/step1/step1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'avatars',
    pathMatch: 'full'
  },
  // {  path: '',    component: AppComponent},
    {        path: 'get-started',        component:  GetStartedComponent      },
    {        path: 'registration',        component:  RegistrationComponent      },
    {        path: 'avatars',        component:  AvatarsComponent      },
    {        path: 'step1',        component:  Step1Component      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
