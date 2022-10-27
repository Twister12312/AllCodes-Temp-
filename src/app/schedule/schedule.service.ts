import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { schedule } from './schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiServerUrl = environment.apiBaseUrl;
  public result!: schedule;

  constructor(private http: HttpClient) {}

  public search(eid:any): Observable<schedule[]> {
    return this.http.get<schedule[]>(
      `${this.apiServerUrl}/Employee/schedule/${eid}`
    );
  }
}
