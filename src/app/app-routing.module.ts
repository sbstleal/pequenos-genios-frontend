import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './interceptor/auth.guard';

import {FormStudentComponent} from './pages/form-student/form-student.component';
import {FormTeacherComponent} from './pages/form-teacher/form-teacher.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {TableStudentComponent} from './pages/table-student/table-student.component';
import {LoginLayoutComponent} from "./pages/login-layout/login-layout.component";
import {HomeLayoutComponent} from "./pages/home-layout/home-layout.component";
import { TableTeacherComponent } from './pages/table-teacher/table-teacher.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', data: {title: 'First Component'}, pathMatch: 'full'},
  {
    path: 'login', component: LoginLayoutComponent, data: {title: 'First Component'},
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  {
    path: 'main', component: HomeLayoutComponent, canActivate: [AuthGuard], canLoad: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      }, {
        path: 'cadastrostudent',
        component: FormStudentComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'cadastroteacher',
        component: FormTeacherComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cadastroteacher/:id',
        component: FormTeacherComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'students',
        component: TableStudentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'teachers',
        component: TableTeacherComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AuthGuard]
      },
      {path: '**', redirectTo: ''}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
