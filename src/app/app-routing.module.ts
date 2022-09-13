import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { FormStudentComponent } from './pages/form-student/form-student.component';
import { FormTeacherComponent } from './pages/form-teacher/form-teacher.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TableStudentComponent } from './pages/table-student/table-student.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrostudent', component: FormStudentComponent, canActivate: [AuthGuard] },
  { path: 'cadastroteacher', component: FormTeacherComponent, canActivate: [AuthGuard] },
  { path: 'students', component: TableStudentComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
