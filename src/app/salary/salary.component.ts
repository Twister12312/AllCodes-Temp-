import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { details } from './details';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  public eid: any;
  public records!: details[];
  // public response: details;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: DetailsService
  ) {}

  ngOnInit(): void {
    let eid = this.route.snapshot.paramMap.get('eid');
    this.eid = eid;
    this.get(eid);
  }
  public get(eid:any): void {
    this.appService.search(eid).subscribe(
      (response: details[]) => {
        this.records = response;
        console.log(this.records);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
