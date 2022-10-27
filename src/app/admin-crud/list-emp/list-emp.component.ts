import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  employees!: Employee[];
  constructor(private empService: EmployeeService, private router: Router, ) { }

  ngOnInit() {
    this.empService.getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
  }

  detailEmp(employee: Employee): any {
    localStorage.removeItem('editEmpId');
    this.router.navigate(['/emp-detail']);
  }

  addEmp(): void {
    localStorage.removeItem('editEmpId');
    this.router.navigate(['/add-emp']);
  }
  View(eid:any){
    this.router.navigate([`/emp-detail/${eid}`],eid);
  }

}
