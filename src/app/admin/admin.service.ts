import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiServerUrl = environment.apiBaseUrl;
  admin: any;
  console: any;

  constructor(private http: HttpClient) {}

  public get(): Observable<admin[]> {
    if (this.admin.username == 'admin' && this.admin.password == '1234') {
      return this.console.log('hello');
    } else {
      alert('wrong');
      return this.console.log("incorrect");
    }
  }
}
