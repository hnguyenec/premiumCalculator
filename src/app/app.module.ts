import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyDatePickerModule } from 'mydatepicker';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
