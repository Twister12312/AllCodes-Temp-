import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  empformlabel = 'Add Employee';
  empformbtn = 'Save';
  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) {}
  editForm!: FormGroup;
  addForm!: FormGroup;
  btnvisibility = true;
  employees:any=[];
  employee:any;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      eid: [],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      passwd: ['', Validators.required],
    });

  }
  onSubmit() {
    console.log('Create fire');
    this.empService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['/list-emp']);
      },
      error => {
        alert(error);
      });
  }



}
