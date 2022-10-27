import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { details } from './details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private apiServerUrl = environment.apiBaseUrl;
  public result!: details;

  constructor(private http: HttpClient) {}

  public search(eid:any): Observable<details[]> {
    return this.http.get<details[]>(
      `${this.apiServerUrl}/Employee/salary/${eid}`
    );
  }
}
