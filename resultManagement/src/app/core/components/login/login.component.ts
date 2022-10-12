import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { TestserviceService } from 'src/app/testservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentLogin: any = FormGroup;


  constructor(private router:Router,private formBuilder:FormBuilder,private data:TestserviceService) { }

  ngOnInit(): void {
    this.studentLogin = this.formBuilder.group({
      roll: new FormControl('',Validators.required),
      dob: new FormControl('',Validators.required),
    });
  }
  get roll() {
    return this.studentLogin.get('roll');
  }
  get dob() {
    return this.studentLogin.get('dob');
  }

  getStudentForm() {
    console.log(this.studentLogin.value);
    this.data.getData(this.studentLogin.value).subscribe((res:any)=>{
      console.warn(res);
      
      const student=res.find((x:any)=>{
        if(x.roll===this.studentLogin.value.roll&&x.dob===this.studentLogin.value.dob){
          return x.id;
        }
      });
      // const id=res.find((y:any)=>{

      // })
      if(student){
        alert("login successful")
        console.log(">>",student.id);
        
        this.studentLogin.reset();
        let z="login/studentLogin/list";
        this.router.navigate([`${z}/${student.id}`])
      }
      else{
        alert("user not found")
      }
    })
  
  }


}
