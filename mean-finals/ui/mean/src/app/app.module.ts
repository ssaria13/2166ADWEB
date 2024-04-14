// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { BookService } from './book.service'; // Import your service

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [
    BookService // Provide your service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
