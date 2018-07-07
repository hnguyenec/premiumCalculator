import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { Gender, DateFormat } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userInforForm: FormGroup;
  today = new Date();

  currentDate: IMyDate = {
    year: this.today.getFullYear(),
    month: this.today.getMonth(),
    day: this.today.getDate()
  };

  dobDatePickerOptions: IMyDpOptions = {
    dateFormat: DateFormat,
    editableDateField: false,
    openSelectorOnInputClick: true,
    disableSince: this.currentDate,
    showTodayBtn: true
  };

  genders: typeof Gender = Gender;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userInforForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get form() { return this.userInforForm.controls; }
}
