import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  empformlabel = 'Edit Employee';
  empformbtn = 'Update';

  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) {
  }

  addForm!: FormGroup;
  editForm!: FormGroup;

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      eid: [],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      designation: ['', Validators.required],
      passwd: ['',Validators.required]
    });
    const eid = Number(localStorage.getItem('editEmpId'));
    if (+eid > 0) {
    this.empService.getEmployeeByID(+eid).subscribe(data => {
      this.editForm.patchValue(data);
    });
  }

}
  onUpdate() {
    console.log('Update fire');
    this.empService.updateEmployee(this.editForm.value).subscribe(data => {
      this.router.navigate(['/list-emp']);
    },
      error => {
        alert("Email id or Employee ID is already present");
      });
  }

}
