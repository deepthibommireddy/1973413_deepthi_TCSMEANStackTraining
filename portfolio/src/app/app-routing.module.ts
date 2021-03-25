import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  
  {path:"\landingpage",component:LandingPageComponent},
  {path:"\login",component:LoginComponent},
  {path:"\pageregistration",component:RegistrationComponent},

  {path:"",redirectTo:"\login",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
