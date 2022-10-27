import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-adm-schd-emp',
  templateUrl: './adm-schd-emp.component.html',
  styleUrls: ['./adm-schd-emp.component.css']
})
export class AdmSchdEmpComponent implements OnInit {

  myParamValue: any;
  schdules:any=[];
  issearched:boolean=false;
  isclicked:boolean=false;//required
  addclicked:boolean=false;
  schdule:any;
  constructor(private route: ActivatedRoute, 
    private Route: Router,private service:ServicesService) { }

  ngOnInit(): void {
    this.myParamValue = this.route.snapshot.paramMap.get('eid');
    this.viewSchedules(this.myParamValue);
  }

  viewSchedules(eid:any){
    this.service.getScheduleById(eid).subscribe(
      (response: any)=>{this.schdules = response;
        console.log(this.schdules);},
      ((error: any)=>{console.error("Some problem in geeting data");})
    
    )
      }
    
      Add(form:any){
        let data={
          "fromdate":form.fromdate,
          "todate":form.todate,
          "timeline":form.timeline
        }
    this.service.addScheduleforEmp(this.myParamValue,data).subscribe(
      (response: any)=>{
        this.viewSchedules(this.myParamValue)},
      ((error: any)=>{console.error("Some problem in geeting data");})
    
    )
    
      }
    
      Edit(form:any){
    let data={
      "schdId":this.schdule.schdId,
      "fromdate":form.fromdate,
      "todate":form.todate,
      "timeline":form.timeline
    }
    this.service.updateScheduleofEmp(this.myParamValue,data).subscribe(
      (response: any)=>{
        this.viewSchedules(this.myParamValue)},
      ((error: any)=>{console.error("Some problem in geeting data");})
    )
    
      }
    
    
      Delete(sid:any){
    this.service.deleteScheduleofEmp(this.myParamValue,sid).subscribe(
      (response: any)=>{
        this.viewSchedules(this.myParamValue)},
      ((error: any)=>{console.error("Some problem in geeting data");})
    )
      }

}


