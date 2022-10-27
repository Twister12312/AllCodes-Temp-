import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from './user';
import { userfull } from './userfull';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiServerUrl = environment.apiBaseUrl;
  user: user = new user();
  console: any;
  userfull: any;
  result: userfull = new userfull();

  constructor(private http: HttpClient) {}

  public findemployeebyname(user: user): Observable<userfull> {
    var email = user.email;
    console.log(user.email);
    var result: Observable<userfull> = this.http.get<userfull>(
      `${this.apiServerUrl}/Employee/login/${email}`
    );
    console.log('this is result' + result);
    return result;
  }
}
