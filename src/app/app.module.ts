import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { UpdatescheduleComponent } from './updateschedule/updateschedule.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddscheduleComponent,
    ViewscheduleComponent,
    UpdatescheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
