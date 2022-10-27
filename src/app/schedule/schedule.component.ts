import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { schedule } from './schedule';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public eid:any;
  public records!: schedule[];
  // public response: details;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: ScheduleService
  ) {}

  ngOnInit(): void {
    let eid = this.route.snapshot.paramMap.get('eid');
    this.eid = eid;
    this.get(eid);
  }
  public get(eid:any): void {
    this.appService.search(eid).subscribe(
      (response: schedule[]) => {
        this.records = response;
        console.log(this.records);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
