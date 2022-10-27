import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public records!: employee[];

  constructor(private appService: EmployeeService) {}
  ngOnInit(): void {
    this.get();
  }

  public get(): void {
    this.appService.get().subscribe(
      (response: employee[]) => {
        this.records = response;
        console.log(this.records);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddemployee(addForm: NgForm): void {
    document.getElementById('add-record-form')!.click();
    console.log(addForm.value);
    this.appService.add(addForm.value).subscribe(
      (response: employee) => {
        console.log(response);
        this.get();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
