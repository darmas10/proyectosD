import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from 'src/app/interfaces/driver';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/conductores';
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(`${this.myAppUrl}${this.myApiUrl}`, driver);
  }

  deleteDriver(id: number): Observable<Driver> {
    const url = `${this.myAppUrl}${this.myApiUrl}/${id}`;
    return this.http.delete<Driver>(url);
  }

  editDriver(driver: Driver): Observable<Driver> {
    const url = `${this.myAppUrl}${this.myApiUrl}/${driver.id}`;
    return this.http.put<Driver>(url, driver);
  }
  
}
