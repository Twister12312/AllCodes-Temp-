import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
/************************************************Attendance services**************************************** */
  public getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Admin/all`);
  }

  public getEmployeeByid(id:any): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Admin/id/${id}`);
  }

  public getAttendanceById(eid:any):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Admin_attendance/${eid}`);
  }

  public addAttendanceforEmp(eid:any,attendance:any):Observable<any>{
     return this.http.post<any>(`${this.apiServerUrl}/Admin_attendance/create/${eid}`,attendance);
  }

  public updateAttendanceofEmp(eid:any,attendance:any):Observable<any>{
     return this.http.put<any>(`${this.apiServerUrl}/Admin_attendance/update/${eid}`,attendance);
  }

  public deleteAttendanceofEmp(eid:any,aid:any):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/Admin_attendance/delete/${eid}/${aid}`);
  }

/*******************************************LEAVE SERVICES******************************************* */
public getLeavesById(eid:any):Observable<any>{
  return this.http.get<any>(`${this.apiServerUrl}/Admin_attendance/leaves/${eid}`);
}


/**********************************************SALARY SERVICES**************************************** */
public getSalaryById(eid:any):Observable<any>{
  return this.http.get<any>(`${this.apiServerUrl}/Admin_salary/${eid}`);
}

public addSalaryforEmp(eid:any,salary:any):Observable<any>{
   return this.http.post<any>(`${this.apiServerUrl}/Admin_salary/create/${eid}`,salary);
}

public updateSalaryofEmp(eid:any,salary:any):Observable<any>{
   return this.http.put<any>(`${this.apiServerUrl}/Admin_salary/update/${eid}`,salary);
}

public deleteSalaryofEmp(eid:any,sid:any):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}/Admin_salary/delete/${eid}/${sid}`);
}

/***********************************************Schedule Services********************************** */
public getScheduleById(eid:any):Observable<any>{
  return this.http.get<any>(`${this.apiServerUrl}/Admin_schedule/${eid}`);
}

public addScheduleforEmp(eid:any,schedule:any):Observable<any>{
   return this.http.post<any>(`${this.apiServerUrl}/Admin_schedule/create/${eid}`,schedule);
}

public updateScheduleofEmp(eid:any,schedule:any):Observable<any>{
   return this.http.put<any>(`${this.apiServerUrl}/Admin_schedule/update/${eid}`,schedule);
}

public deleteScheduleofEmp(eid:any,schdid:any):Observable<any>{
  return this.http.delete<any>(`${this.apiServerUrl}/Admin_schedule/delete/${eid}/${schdid}`);
}

}
