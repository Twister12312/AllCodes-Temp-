import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public search(eid: any): Observable<employee> {
    var result: Observable<employee> = this.http.get<employee>(
      `${this.apiServerUrl}/Admin/id/${eid}`
    );
    console.log('this is result' + result);
    return result;
  }
}
