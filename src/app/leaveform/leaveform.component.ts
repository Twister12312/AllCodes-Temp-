import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService } from './leave.service';

@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.component.html',
  styleUrls: ['./leaveform.component.css']
})
export class LeaveformComponent implements OnInit {

  public eid:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: LeaveService
  ) {}

  ngOnInit(): void {
    let eid = this.route.snapshot.paramMap.get('eid');
    this.eid = eid;
  }
  public onAddleave(eid:any, addForm: any): void {
    let data = {
      date: addForm.value.date,
      status: 'Leave',
    };
    console.log(addForm.date);
    this.appService.addleave(eid, data).subscribe(
      (response: any) => {
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
