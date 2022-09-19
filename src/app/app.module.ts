import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {NgxMaskModule} from 'ngx-mask';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MaterialNgModule} from './material/material.module';
import {FormStudentComponent} from './pages/form-student/form-student.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {FormTeacherComponent} from './pages/form-teacher/form-teacher.component';
import {TableStudentComponent} from './pages/table-student/table-student.component';
import {AuthGuard} from "./interceptor/auth.guard";
import {LoginLayoutComponent} from "./pages/login-layout/login-layout.component";
import {HomeLayoutComponent} from "./pages/home-layout/home-layout.component";
import {LoaderComponent} from "./shared/loader/loader.component";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {LoaderInterceptor} from "./interceptor/loader.interceptor";
import { TableTeacherComponent } from './pages/table-teacher/table-teacher.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
        LoginLayoutComponent,
        HomeLayoutComponent,
        LoaderComponent,
        TableTeacherComponent,
        CarouselComponent,
        ContactComponent
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
        FontAwesomeModule,
        HttpClientModule
    ],
    providers: [
      AuthGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true,
      },
    ],
    bootstrap: [AppComponent],
    exports: [
        HeaderComponent
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
