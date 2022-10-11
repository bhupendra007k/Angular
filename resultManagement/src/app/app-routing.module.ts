import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './core/components/index/index.component';
import { LoginComponent } from './core/components/login/login.component';
import { StudentListComponent } from './core/components/student-list/student-list.component';
import { AddStudentComponent } from './core/components/add-student/add-student.component';
import { UpdateStudentComponent } from './core/components/update-student/update-student.component';
export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: StudentListComponent },
  { path: 'list/add', component: AddStudentComponent },
  { path: 'list/update/:id', component: UpdateStudentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
