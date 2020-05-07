import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { UpdatescheduleComponent } from './updateschedule/updateschedule.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';

const routes: Routes = 
[{path:'viewsf',component:ViewscheduleComponent},
{path:'addsf',component:AddscheduleComponent},
{path:'updatesf',component:UpdatescheduleComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

