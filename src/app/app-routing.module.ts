import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'admin', component:AdmindashComponent},
  {path:'appointmentlist', component:AppointmentComponent},
  {path:'creatappointment', component: CreateAppointmentComponent},
  {path:'home', component:HomeComponent},
  {path: "", redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
