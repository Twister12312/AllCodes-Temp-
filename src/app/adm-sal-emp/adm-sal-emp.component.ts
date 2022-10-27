import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-adm-sal-emp',
  templateUrl: './adm-sal-emp.component.html',
  styleUrls: ['./adm-sal-emp.component.css']
})
export class AdmSalEmpComponent implements OnInit {
  myParamValue: any;
  salarys:any=[];
  issearched:boolean=false;
  isclicked:boolean=false;//required
  addclicked:boolean=false;
  salari:any;
  constructor(private route: ActivatedRoute, 
    private Route: Router,private service:ServicesService) { }

  ngOnInit(): void {
    this.myParamValue = this.route.snapshot.paramMap.get('eid');
    this.viewSalarys(this.myParamValue);
  }

  viewSalarys(eid:any){
    this.service.getSalaryById(eid).subscribe(
      (response: any)=>{this.salarys = response;
        console.log(this.salarys);},
      ((error: any)=>{console.error("Some problem in geeting data");})
    
    )
      }
    
      Add(form:any){
        let data={
          "month":form.month,
          "salary":form.salary
        }
    this.service.addSalaryforEmp(this.myParamValue,data).subscribe(
      (response: any)=>{
        this.viewSalarys(this.myParamValue)},
      ((error: any)=>{console.error("Some problem in geeting data");})
    
    )
    
      }
    
      Edit(form:any){
    let data={
      "sid":this.salari.sid,
      "month":form.month,
      "salary":form.salary
    }
    this.service.updateSalaryofEmp(this.myParamValue,data).subscribe(
      (response: any)=>{
        this.viewSalarys(this.myParamValue)},
      ((error: any)=>{console.error("Some problem in geeting data");})
    )
    
      }
    
    
      Delete(sid:any){
    this.service.deleteSalaryofEmp(this.myParamValue,sid).subscribe(
      (response: any)=>{
        this.viewSalarys(this.myParamValue)},
      ((error: any)=>{console.error("Some problem in geeting data");})
    )
      }

}
