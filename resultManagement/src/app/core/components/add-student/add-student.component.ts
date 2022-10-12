import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { TestserviceService } from 'src/app/testservice.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudent: any = FormGroup;

  constructor(
    private student: TestserviceService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.addStudent = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      roll: new FormControl('', Validators.required),
      score: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
    });
  }

  get name() {
    return this.addStudent.get('name');
  }
  get roll() {
    return this.addStudent.get('roll');
  }
  get score() {
    return this.addStudent.get('score');
  }
  get dob() {
    return this.addStudent.get('dob');
  }
  getFormData() {
    // console.log(this.addStudent.value);
    return this.student
      .saveAddStudent(this.addStudent.value)
      .subscribe((res) => {
        console.log('helu', res);
      });
  }
}
