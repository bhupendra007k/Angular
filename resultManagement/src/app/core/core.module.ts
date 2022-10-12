import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentRecordComponent } from './components/student-record/student-record.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [LoginComponent, IndexComponent, FooterComponent, StudentListComponent, AddStudentComponent, UpdateStudentComponent, TeacherLoginComponent, StudentRecordComponent, HomeComponent],
  imports: [CommonModule, CoreRoutingModule,ReactiveFormsModule],
})
export class CoreModule {}
