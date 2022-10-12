import { Component, OnInit } from '@angular/core';
import { TestserviceService } from 'src/app/testservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css']
})
export class StudentRecordComponent implements OnInit {
  studentRecord:any=[];

  constructor(private data:TestserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.data.getDataById(this.router.snapshot.params['id']).subscribe((res:any)=>{
      this.studentRecord=res;
      console.log(">>",res);
      

    })
  }
  

}
