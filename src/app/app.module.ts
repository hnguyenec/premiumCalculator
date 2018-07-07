import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyDatePickerModule } from 'mydatepicker';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';

import { AppComponent } from './app.component';
import { AgeHelpersService } from './shared/age-helpers.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    ReactiveFormsModule
  ],
  providers: [
    AgeHelpersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
