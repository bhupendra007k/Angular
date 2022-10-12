import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TestserviceService } from 'src/app/testservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  resultList: any = [];
  id: any = {};

  constructor(private data: TestserviceService) {}

  ngOnInit(): void {
    this.data.getData(null).subscribe((response:any) => {
      this.resultList = response;    
  });
}
  deleteRecord(id:any){
    this.resultList.splice(id-1,1)
    this.data.deleteData(id).subscribe((x)=>{
      console.warn("test",x);
      
    })

  }
  
}
