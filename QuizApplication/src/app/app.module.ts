import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayQComponent } from './display-q/display-q.component';
import { FormsModule } from '@angular/forms';
import { ScoreComponent } from './score/score.component';
import { StartPageComponent } from './start-page/start-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayQComponent,
    ScoreComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
