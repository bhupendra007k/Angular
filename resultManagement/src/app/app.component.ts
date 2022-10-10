import { Component } from '@angular/core';
import { TestserviceService } from './testservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resultManagement';
  abc:any=[]
  
  
  


  constructor(private data:TestserviceService){
    this.data.getData().subscribe((x:any)=>{
      this.abc=x;
      console.warn(x);

    })

  }

}
