import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private apiServerUrl = environment.apiBaseUrl;
  public result!: attendance;

  constructor(private http: HttpClient) {}

  public search(eid:any): Observable<attendance[]> {
    return this.http.get<attendance[]>(
      `${this.apiServerUrl}/Employee/attendance/${eid}`
    );
  }
}
