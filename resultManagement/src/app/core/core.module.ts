import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { IndexComponent } from './components/index/index.component';

import { FooterComponent } from './components/footer/footer.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

@NgModule({
  declarations: [LoginComponent, IndexComponent, FooterComponent, StudentListComponent, AddStudentComponent, UpdateStudentComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
