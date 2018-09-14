import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import HttpClientModule
    FormsModule // import FormsModule
  ],
  providers: [HttpService], // add HttpService from http.service.ts
  bootstrap: [AppComponent]
})
export class AppModule { }
