import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './interceptor/auth.guard';

import {FormStudentComponent} from './pages/student/form-student/form-student.component';
import {FormTeacherComponent} from './pages/teacher/form-teacher/form-teacher.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {TableStudentComponent} from './pages/student/table-student/table-student.component';
import {LoginLayoutComponent} from "./pages/login-layout/login-layout.component";
import {HomeLayoutComponent} from "./pages/home-layout/home-layout.component";
import { TableTeacherComponent } from './pages/teacher/table-teacher/table-teacher.component';
import { ContactComponent } from './pages/contact/contact.component';
import {FormClassComponent} from "./pages/class/form-class/form-class.component";
import {TableClassComponent} from "./pages/class/table-class/table-class.component";


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
        canActivate: [AuthGuard]
      },
      {
        path: 'cadastrostudent/:id',
        component: FormStudentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cadastroteacher',
        component: FormTeacherComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cadastroclass',
        component: FormClassComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cadastroclass/:id',
        component: FormClassComponent,
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
        path: 'classes',
        component: TableClassComponent,
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
