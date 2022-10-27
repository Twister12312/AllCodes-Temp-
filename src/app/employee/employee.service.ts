import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from '../employeeprofile/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public get(): Observable<employee[]> {
    return this.http.get<employee[]>(`${this.apiServerUrl}/Admin/all`);
  }

  public add(x: employee): Observable<employee> {
    console.log();
    alert('Register successfull');
    return this.http.post<employee>(
      `${this.apiServerUrl}/Employee/register`,
      x
    );
  }
}
