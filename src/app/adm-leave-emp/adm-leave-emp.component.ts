import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-adm-leave-emp',
  templateUrl: './adm-leave-emp.component.html',
  styleUrls: ['./adm-leave-emp.component.css']
})
export class AdmLeaveEmpComponent implements OnInit {
  myParamValue: any;
  leaves:any=[];
  leave:any;
  isclicked:boolean=false;//required
  addclicked:boolean=false;
  constructor(private route: ActivatedRoute, 
    private Route: Router,private service:ServicesService) { }

  ngOnInit(): void {
    this.myParamValue = this.route.snapshot.paramMap.get('eid');
    this.viewLeaves(this.myParamValue);
  }


  viewLeaves(eid:any){
this.service.getLeavesById(eid).subscribe(
  (response: any)=>{this.leaves = response;
    console.log(this.leaves);},
  ((error: any)=>{console.error("Some problem in geeting data");})
)
  }

  Add(form:any){
    let data={
      "date":form.date,
      "status":"Leave"
    }
this.service.addAttendanceforEmp(this.myParamValue,data).subscribe(
  (response: any)=>{
    this.viewLeaves(this.myParamValue)},
  ((error: any)=>{console.error("Some problem in geeting data");})

)

  }

  Edit(form:any){
    let data={
      "aid":this.leave.aid,
      "date":this.leave.date,
      "status":form.status
    }
    this.service.updateAttendanceofEmp(this.myParamValue,data).subscribe(
      (response: any)=>{
        this.viewLeaves(this.myParamValue)},
      ((error: any)=>{console.error("Some problem in geeting data");})
    )
      }


      Delete(aid:any){
        this.service.deleteAttendanceofEmp(this.myParamValue,aid).subscribe(
          (response: any)=>{
            this.viewLeaves(this.myParamValue)},
          ((error: any)=>{console.error("Some problem in geeting data");})
        )
          }
}
