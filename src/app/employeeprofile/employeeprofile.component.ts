import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {

  public eid: any;
  public employee: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: EmployeeService
  ) {}

  signupForm!: FormGroup;

  ngOnInit(): void {
    let eid = this.route.snapshot.paramMap.get('eid');
    this.eid = eid;
    this.get(eid);
  }
  public get(eid: any): void {
    this.appService.search(eid).subscribe(
      (response: employee) => {
        this.employee = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
