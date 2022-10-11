import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentListComponent} from './core/components/student-list/student-list.component'
import { LoginComponent } from './core/components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './core/components/footer/footer.component';
import { IndexComponent } from './core/components/index/index.component';
import { HeaderComponent } from './core/components/header/header.component';
import { UpdateStudentComponent} from './core/components/update-student/update-student.component'
import { AddStudentComponent } from './core/components/add-student/add-student.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [AppComponent, FooterComponent, LoginComponent, IndexComponent,StudentListComponent,HeaderComponent,AddStudentComponent,UpdateStudentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
