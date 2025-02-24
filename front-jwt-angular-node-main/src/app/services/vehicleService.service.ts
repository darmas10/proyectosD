import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/vehiculos';
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.myAppUrl}${this.myApiUrl}`, vehicle);
  }

  deleteVehicle(id: number): Observable<Vehicle> {
    const url = `${this.myAppUrl}${this.myApiUrl}/${id}`;
    return this.http.delete<Vehicle>(url);
  }

  editVehicle(vehicle: Vehicle): Observable<Vehicle> {
    const url = `${this.myAppUrl}${this.myApiUrl}/${vehicle.id}`;
    return this.http.put<Vehicle>(url, vehicle);
  }
}
