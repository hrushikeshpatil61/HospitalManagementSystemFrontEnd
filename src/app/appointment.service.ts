import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private HttpClient: HttpClient) { }
  private baseUrl = "http://localhost:8080/api/v2"
  
  getAllAppointments(): Observable<Appointment[]>{
    return this.HttpClient.get<Appointment[]>(`${this.baseUrl}`);
  }
  
  createAppointment(appointment: Appointment):Observable<Appointment>{
    return this.HttpClient.post<Appointment>(`${this.baseUrl}/insert`, appointment);
  }
  deleteAppointment(id: number): Observable<object>{
    return this.HttpClient.delete<object>(`${this.baseUrl}/appointments/${id}`)
  }
}
