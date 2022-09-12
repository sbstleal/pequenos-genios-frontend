import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { MaterialNgModule } from './material/material.module';
import { FormStudentComponent } from './pages/form-student/form-student.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormTeacherComponent } from './pages/form-teacher/form-teacher.component';
import { TableStudentComponent } from './pages/table-student/table-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    FormStudentComponent,
    FormTeacherComponent,
    TableStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialNgModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
