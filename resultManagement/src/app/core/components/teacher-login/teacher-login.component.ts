import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { TestserviceService } from 'src/app/testservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css'],
})
export class TeacherLoginComponent implements OnInit {
  loginForm: any = FormGroup;
  
  constructor(private formBuilder: FormBuilder,private data:TestserviceService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      password: new FormControl('',Validators.required),
    });
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }


  getFormData() {
    console.log(this.loginForm.value);
    this.data.getTeacherDetails(this.loginForm.value).subscribe((res:any)=>{
      const teacher=res.find((x:any)=>{
        return x.username===this.loginForm.value.username&&x.password===this.loginForm.value.password
      });
      if(teacher){
        alert("login successful")
        this.loginForm.reset();
        this.router.navigate(['login/teacherlogin/list'])
      }
      else{
        alert("user not found")
      }
    })
  
  }
  
}
