import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { editprofile } from './editprofile';

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public search(data:any): Observable<editprofile> {
    console.log('the creds' + data);
    return this.http.put<editprofile>(
      `${this.apiServerUrl}/Employee/update/`,
      data
    );
  }
}
