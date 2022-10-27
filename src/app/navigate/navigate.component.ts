import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  public eid: any
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let eid = this.route.snapshot.paramMap.get('eid');
    this.eid = eid;
  }
 
  gotoRegister() {
    this.router.navigate(['/employeeprofile', this.eid]);
  }
  gotosalary() {
    this.router.navigate(['/salary', this.eid]);
  }
  gotoaddsalary() {
    this.router.navigate(['/addsalary', this.eid]);
  }
  gotoattendance() {
    this.router.navigate(['/attendance', this.eid]);
  }
  gotoaddattendance() {
    this.router.navigate(['/attend', this.eid]);
  }
  gotoaddschedule() {
    this.router.navigate(['/addschedule', this.eid]);
  }
  gotoschedule() {
    this.router.navigate(['/schedule', this.eid]);
  }
  gotoeditprofile() {
    this.router.navigate(['/editprofile', this.eid]);
  }
  gotoapplyleave() {
    this.router.navigate(['/leaveform', this.eid]);
  }
}
