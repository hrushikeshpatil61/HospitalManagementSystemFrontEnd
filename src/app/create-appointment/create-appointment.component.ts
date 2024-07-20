import { AppointmentService } from './../appointment.service';
import { Appointment } from './../appointment';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
appointment: Appointment = new Appointment();

constructor(private appointmentService: AppointmentService, private router: Router){}

onSubmit(){
    this.saveAppointment();
  }

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data =>{
      console.log(data);
      this.goToAppointment();
    })
  }

  goToAppointment(){
    this.router.navigate(['/appointmentlist'])
  }
}
