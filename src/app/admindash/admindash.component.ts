import { Patient } from '../patient';
import { PatientService } from './../patient.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  patients:Patient[] = [];
  constructor(private PatientService:PatientService){}

  ngOnInit():void{
    this.getPatients();
  }
  getPatients(){
    this.PatientService.getPatientList().subscribe(
      (data) =>{
        this.patients = data;
        console.log(this.patients)
      },
      (error) =>{
        console.error("Error Fetching Data:", error)
      }
    )
    console.log("total patients:", this.patients.length)
  }
  deletePatient(id: number){
    this.PatientService.deletePatient(id).subscribe(
      (data) =>
        console.log(data)
    )
    this.getPatients()
  }
}
