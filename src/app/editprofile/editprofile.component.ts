import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { editprofile } from './editprofile';
import { EditprofileService } from './editprofile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  public eid:any;
  public addschedule!: editprofile;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: EditprofileService
  ) {}
  public records!: editprofile[];

  ngOnInit(): void {
    let eid = this.route.snapshot.paramMap.get('eid');
    this.eid = eid;
  }

  public onedit(addForm: any): void {
    console.log(addForm.value.name);
    let data = {
      eid: this.eid,

      name: addForm.value.name,
      dob: addForm.value.date,
      email: addForm.value.email,
      designation: addForm.value.designation,
      address: addForm.value.address,
      gender: addForm.value.gender,
      phone: addForm.value.phone,
      passwd: addForm.value.passwd,
    };
    console.log(data);
    this.appService.search(data).subscribe(
      (response: editprofile) => {
        console.log(response);

        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
