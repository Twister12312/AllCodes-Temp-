import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  myParamValue: any;
  employeeID!: number;
  employees: any=[];
  employeess:any;


  constructor(private empService: EmployeeService,private formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute ) {

   }
  editForm!: FormGroup;
  ngOnInit(): void {
    this.myParamValue = this.route.snapshot.paramMap.get('eid');
    this.getEmployeeByID(this.myParamValue);
  }
 getEmployeeByID(eid:any){
    this.empService.getEmployeeByID(eid).subscribe(
      (response: any)=>{this.employeess = response;
        console.log(this.employeess);},
      ((error: any)=>{console.error("Some problem in geeting data");})

    )
      }

  deleteEmp(eid: any){
    this.empService.deleteEmployees(eid)
      .subscribe((response: any)=>{
        this.deleteEmp(this.employeess)},
      ((error: any)=>{console.error("Some problem in geeting data");})
    )
  }

  editEmp(eid: any) {
    localStorage.removeItem('editEmpId');
    localStorage.setItem('editEmpId', this.myParamValue.toString());
    this.router.navigate([`/edit-emp/${eid}`]);
  }

  addEmp(): void {
    localStorage.removeItem('editEmpId');
    this.router.navigate(['/add-emp']);
  }

}
