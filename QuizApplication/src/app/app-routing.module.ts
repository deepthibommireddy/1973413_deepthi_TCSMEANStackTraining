import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayQComponent } from './display-q/display-q.component';

import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  
  {path:"\display",component:DisplayQComponent},
  {path:"\start",component:StartPageComponent},
  {path:"",redirectTo:"\start",pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
