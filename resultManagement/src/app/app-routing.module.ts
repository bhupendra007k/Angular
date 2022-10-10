import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './core/components/index/index.component';
import {LoginComponent} from './core/components/login/login.component'

export const routes: Routes = [{
  path:'login',
  component:LoginComponent
},{
  path:'index',
  component:IndexComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
