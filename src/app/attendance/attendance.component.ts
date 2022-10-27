import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { attendance } from './attendance';
import { AttendanceService } from './attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  public eid:any;
  public records!: attendance[];
  // public response: details;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AttendanceService
  ) {}

  ngOnInit(): void {
    let eid = this.route.snapshot.paramMap.get('eid');
    this.eid = eid;
    this.get(eid);
  }
  public get(eid:any): void {
    this.appService.search(eid).subscribe(
      (response: attendance[]) => {
        this.records = response;
        console.log(this.records);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
