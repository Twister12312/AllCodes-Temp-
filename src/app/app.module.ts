import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdmAttHomeComponent } from './adm-att-home/adm-att-home.component';
import { AdmAttEmpComponent } from './adm-att-emp/adm-att-emp.component';
import { AdmLeaveHomeComponent } from './adm-leave-home/adm-leave-home.component';
import { AdmLeaveEmpComponent } from './adm-leave-emp/adm-leave-emp.component';
import { AdmSalHomeComponent } from './adm-sal-home/adm-sal-home.component';
import { AdmSalEmpComponent } from './adm-sal-emp/adm-sal-emp.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NavigateComponent } from './navigate/navigate.component';
import { AdmSchdHomeComponent } from './adm-schd-home/adm-schd-home.component';
import { AdmSchdEmpComponent } from './adm-schd-emp/adm-schd-emp.component';
import { AdminCrudComponent } from './admin-crud/admin-crud.component';
import { AddEmpComponent } from './admin-crud/add-emp/add-emp.component';
import { EditEmpComponent } from './admin-crud/edit-emp/edit-emp.component';
import { ListEmpComponent } from './admin-crud/list-emp/list-emp.component';
import { EmpDetailComponent } from './admin-crud/emp-detail/emp-detail.component';
import { AdmHomeComponent } from './adm-home/adm-home.component';
import { SalaryComponent } from './salary/salary.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LeaveformComponent } from './leaveform/leaveform.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmAttHomeComponent,
    AdmAttEmpComponent,
    AdmLeaveHomeComponent,
    AdmLeaveEmpComponent,
    AdmSalHomeComponent,
    AdmSalEmpComponent,
    UserComponent,
    AdminComponent,
    EmployeeprofileComponent,
    EmployeeComponent,
    HomeComponent,
    NavigateComponent,
    AdmSchdHomeComponent,
    AdmSchdEmpComponent,
    AdminCrudComponent,
    AddEmpComponent,
    EditEmpComponent,
    ListEmpComponent,
    EmpDetailComponent,
    AdmHomeComponent,
    SalaryComponent,
    AttendanceComponent,
    ScheduleComponent,
    EditprofileComponent,
    LeaveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : '', component : HomeComponent},
      {path : 'user', component : UserComponent},
      { path: 'navigate/:eid', component: NavigateComponent },
      { path: 'employeeprofile/:eid', component: EmployeeprofileComponent },
      { path: 'salary/:eid', component: SalaryComponent },
      { path: 'schedule/:eid', component: ScheduleComponent },
      { path: 'leaveform/:eid', component: LeaveformComponent },
      { path: 'editprofile/:eid', component: EditprofileComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'attendance/:eid', component: AttendanceComponent },

      { path: 'admin', component: AdminComponent },
      { path: 'adminhome', component:  AdmHomeComponent},
      { path: 'add-emp', component: AddEmpComponent },
      { path: 'edit-emp', component: EditEmpComponent },
      { path: 'list-emp', component: ListEmpComponent },
      { path: 'emp-detail', component: EmpDetailComponent },
      { path: 'emp-detail/:eid', component: EmpDetailComponent },
      { path: 'edit-emp/:eid', component: EditEmpComponent },
      {path : 'admatthome', component : AdmAttHomeComponent},
      {path : 'admatthome/:eid', component : AdmAttEmpComponent},
      {path : 'admleavehome', component : AdmLeaveHomeComponent},
      {path : 'admleavehome/:eid', component : AdmLeaveEmpComponent},
      {path : 'admsalhome', component : AdmSalHomeComponent},
      {path : 'admsalhome/:eid', component : AdmSalEmpComponent},
      {path : 'admschdhome', component : AdmSchdHomeComponent},
      {path : 'admschdhome/:eid', component : AdmSchdEmpComponent},
   ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
