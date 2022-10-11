import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TestserviceService {
  private readonly url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(this.url);
  }
  deleteData(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
  saveAddStudent(data: any) {
    return this.http.post(this.url+'/add/',data)
  }
  getDataById(id:any){
    return this.http.get(`${this.url}/${id}`)

  }
  updateStudentDetails(id:any,data:object){
    
    return this.http.patch(`${this.url}/${id}`,data)
    

    

  }
}
