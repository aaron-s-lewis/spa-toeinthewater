import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from '../containers/registration/registration.component';
import { GetStartedComponent } from 'src/containers/get-started/get-started.component';
import { AppComponent } from './app.component';
import { AvatarsComponent } from 'src/containers/avatars/avatars.component';
import { Step1Component } from 'src/containers/step1/step1.component';
import { Step2Component } from 'src/containers/step2/step2.component';
import { Step3Component } from 'src/containers/step3/step3.component';

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
    {        path: 'step1',        component:  Step1Component      },
    {        path: 'step2',        component:  Step2Component      },
    {        path: 'step3',        component:  Step3Component      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
