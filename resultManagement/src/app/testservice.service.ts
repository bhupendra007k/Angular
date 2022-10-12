import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestserviceService {
  private readonly url = 'http://localhost:3000';
  private readonly updateurl='http://localhost:3000/student';

  constructor(private http: HttpClient) {}
  getData(data:any){
    return this.http.get(this.url+'/students/');
  }
  deleteData(id: any): Observable<any> {
    return this.http.delete(`${this.updateurl}/${id}`);
  }
  saveAddStudent(data: any) {
    return this.http.post(this.url + '/student/add', data);
  }
  getDataById(id: any) {
    return this.http.get(`${this.updateurl}/${id}`);
  }
  updateStudentDetails(id: any, data: object) {
    return this.http.patch(`${this.updateurl}/${id}`, data);
  }
  teacherLogin(data:any){
    return this.http.get(this.url+'/teacherLogin/');
  }
  getTeacherDetails(data:any):Observable<any>{
    return this.http.get(this.url+'/teachers')
  }
 
}
