import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

import { TestserviceService } from 'src/app/testservice.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudent=new FormGroup({
    name: new FormControl(''),
    roll: new FormControl(''),
    score: new FormControl(''),
    dob: new FormControl(''),
  })
  
  constructor(private student:TestserviceService) { }
  ngOnInit(): void {
  }
  getFormData(){
    // console.log(this.addStudent.value);
    return this.student.saveAddStudent(this.addStudent.value).subscribe((res)=>{
      console.log("helu",res);
      

    })
  }




}
