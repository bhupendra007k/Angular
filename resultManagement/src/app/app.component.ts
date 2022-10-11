import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './testservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'resultManagement';
  abc: any = [];

  constructor(private data: TestserviceService, private router: Router) {}
  ngOnInit(): void {
    
    this.data.getData().subscribe((x: any) => {
      this.abc = x;
      console.warn(x);
    });

  }
}
