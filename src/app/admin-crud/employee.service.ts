import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private apiServerUrl = environment.apiBaseUrl;

  getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Admin/all`);
  }
  deleteEmployees(eid: any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/Admin/delete/${eid}`);
  }
  createUser(employee: any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Admin/add`, employee);
  }
  getEmployeeByID(eid:any): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Admin/id/${eid}`);
  }
  getEmployeeByname(name: any): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Admin/name/${name}`);
  }
  getEmployeeByemail(email: any): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Admin/mail/${email}`);
  }
  updateEmployee(employee: any): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/Admin/update`,employee);
  }
}
