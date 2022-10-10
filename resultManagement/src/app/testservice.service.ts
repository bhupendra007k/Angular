import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudents } from 'interface/IStudents';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    let url="http://localhost:3000"
    return this.http.get(url)
  }
}
