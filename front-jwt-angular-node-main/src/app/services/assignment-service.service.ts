import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assignment } from 'src/app/interfaces/assignment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/asignaciones';
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }


  addAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(`${this.myAppUrl}${this.myApiUrl}`, assignment);
  }

  deleteAssignment(id: number): Observable<Assignment> {
    const url = `${this.myAppUrl}${this.myApiUrl}/${id}`;
    return this.http.delete<Assignment>(url);
  }

  editAssignment(assignment: Assignment): Observable<Assignment> {
    const url = `${this.myAppUrl}${this.myApiUrl}/${assignment.id}`;
    return this.http.put<Assignment>(url, assignment);
  }
}
