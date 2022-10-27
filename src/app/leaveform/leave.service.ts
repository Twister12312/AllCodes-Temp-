import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public addleave(eid:any, data:any): Observable<any> {
    console.log('the date is' + data.date);
    // const data = JSON.stringify(addForm.value);

    return this.http.post<any>(
      `${this.apiServerUrl}/Admin_attendance/create/${eid}`,
      data
    );
  }
}
