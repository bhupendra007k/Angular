import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestserviceService } from 'src/app/testservice.service';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  updateStudent = new FormGroup({
    name: new FormControl(''),
    roll: new FormControl(''),
    score: new FormControl(''),
    dob: new FormControl(''),
  });

  constructor(
    private router: ActivatedRoute,
    private data: TestserviceService
  ) {}

  ngOnInit(): void {
    // console.warn(this.router.snapshot.params['id']);
    this.data
      .getDataById(this.router.snapshot.params['id'])
      .subscribe((res: any) => {
       
        this.updateStudent = new FormGroup({
          name: new FormControl(res['name']),
          roll: new FormControl(res['roll']),
          score: new FormControl(res['score']),
          dob: new FormControl(res['dob']),
        });
      });
  }
  updatedValues(){
     console.log("values",this.updateStudent.value);
     console.log(this.router.snapshot.params['id']);
     
     this.data.updateStudentDetails(this.router.snapshot.params['id'],this.updateStudent.value).subscribe((res)=>{
      console.warn(res);
      

     })
     
  }
}
