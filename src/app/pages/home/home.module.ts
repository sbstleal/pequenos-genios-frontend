import { HomeComponent } from './../../../../.history/src/app/pages/home/home.component_20220909000012';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";


import { CarouselComponent } from "./carousel/carousel.component";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule],

  declarations: [
    HomeComponent,
    CarouselComponent],

  bootstrap: [HomeComponent]
})
export class HomeModule { }