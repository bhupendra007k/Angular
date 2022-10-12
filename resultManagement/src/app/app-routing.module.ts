import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './core/components/index/index.component';
import { LoginComponent } from './core/components/login/login.component';
import { StudentListComponent } from './core/components/student-list/student-list.component';
import { AddStudentComponent } from './core/components/add-student/add-student.component';
import { UpdateStudentComponent } from './core/components/update-student/update-student.component';
import { TeacherLoginComponent } from './core/components/teacher-login/teacher-login.component';
import { StudentRecordComponent } from './core/components/student-record/student-record.component';
import { HomeComponent } from './core/components/home/home.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: IndexComponent },
  { path: 'login/studentLogin', component: LoginComponent },
  { path: 'login/studentLogin/list/:id', component: StudentRecordComponent },
  { path: 'login/teacherlogin/list', component: StudentListComponent },
  { path: 'login/teacherlogin/list/add', component: AddStudentComponent },
  { path: 'login/teacherlogin/list/update/:id', component: UpdateStudentComponent },
  { path: 'login/teacherlogin', component: TeacherLoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
