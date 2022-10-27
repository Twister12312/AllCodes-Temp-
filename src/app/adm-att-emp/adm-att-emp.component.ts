import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-adm-att-emp',
  templateUrl: './adm-att-emp.component.html',
  styleUrls: ['./adm-att-emp.component.css']
})
export class AdmAttEmpComponent implements OnInit {
  myParamValue: any;
  attendances:any=[];
  issearched:boolean=false;
  isclicked:boolean=false;//required
  addclicked:boolean=false;
  attendance:any;
  constructor(private route: ActivatedRoute, 
    private Route: Router,private service:ServicesService) { }

  ngOnInit(): void {
    this.myParamValue = this.route.snapshot.paramMap.get('eid');
    this.viewAttendances(this.myParamValue);
  }

  viewAttendances(eid:any){
this.service.getAttendanceById(eid).subscribe(
  (response: any)=>{this.attendances = response;
    console.log(this.attendances);},
  ((error: any)=>{console.error("Some problem in geeting data");})

)
  }

  Add(form:any){
    let data={
      "date":form.date,
      "status":form.status
    }
this.service.addAttendanceforEmp(this.myParamValue,data).subscribe(
  (response: any)=>{
    this.viewAttendances(this.myParamValue)},
  ((error: any)=>{console.error("Some problem in geeting data");})

)

  }

  Edit(form:any){
let data={
  "aid":this.attendance.aid,
  "date":form.date,
  "status":form.status
}
this.service.updateAttendanceofEmp(this.myParamValue,data).subscribe(
  (response: any)=>{
    this.viewAttendances(this.myParamValue)},
  ((error: any)=>{console.error("Some problem in geeting data");})
)

  }


  Delete(aid:any){
this.service.deleteAttendanceofEmp(this.myParamValue,aid).subscribe(
  (response: any)=>{
    this.viewAttendances(this.myParamValue)},
  ((error: any)=>{console.error("Some problem in geeting data");})
)
  }

 

}
