import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { admin } from './admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route: Router) { }
  iscorrect:boolean=true;
  onSubmit(form:any){
    var firstName = form.firstName;
    var lastName = form.lastName;
    if(firstName=="user1"&&lastName=="hello"){
    this.route.navigate(['/adminhome']);
    }
    else{
      this.iscorrect=false;
      alert("Incorrect Credentials!");
    }
    
  }
  ngOnInit(): void {
  }
}
