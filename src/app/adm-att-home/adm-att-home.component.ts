import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-adm-att-home',
  templateUrl: './adm-att-home.component.html',
  styleUrls: ['./adm-att-home.component.css']
})
export class AdmAttHomeComponent implements OnInit {

  constructor(private route: Router,private service:ServicesService) { }
employees:any=[];
employee:any;
issearched:boolean=false;
  ngOnInit(): void {
    this.getEmployees();
  }
onSubmit(form:any){
let id=form.firstName;
this.issearched=true;

this.service.getEmployeeByid(id).subscribe(
  (response: any)=>{this.employee = response;
    console.log(this.employee);},
  ((error: any)=>{console.error("Some problem in geeting data");})
)
}

getEmployees(){
this.service.getEmployees().subscribe(
  (response: any)=>{this.employees = response;
    console.log(this.employees);},
  ((error: any)=>{console.error("Some problem in geeting data");})
)
}


View(eid:any){
  this.route.navigate([`/admatthome/${eid}`],eid);

}

}
