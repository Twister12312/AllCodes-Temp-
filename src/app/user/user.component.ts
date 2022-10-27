import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from './user';
import { AppService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) {}
  user: user = new user();
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  gotoRegister() {
    this.router.navigate(['/employee']);
  }

  onClickSubmit(formdata: { email: any; passwd: any; }, form: { reset: () => void; }) {
    var eid: Number;
    var incomingpassword: string = '';
    user.email = formdata.email;
    user.passwd = formdata.passwd;

    this.appService.findemployeebyname(user).subscribe(
      (data) => {
        eid = data.eid;
        incomingpassword = data.passwd;
        if (incomingpassword === user.passwd) {
          console.log('correct pass');
          alert('Login successfull');
          this.router.navigate(['/navigate', eid]);
        } else {
          console.log('wrong pass');
          alert('Wrong Password . Enter correct password');
          form.reset();
        }
      },
      (error) => {
        alert('enter correct details');
        form.reset();
      }
    );
  }

  alert(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
