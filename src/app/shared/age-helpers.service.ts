import { Injectable } from '@angular/core';
import { DateFormat } from './constants';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AgeHelpersService {

  public isDate(dateString: string): boolean {
    return moment(dateString, DateFormat.toUpperCase(), true).isValid();
  }

  public getAge(dobString: string): number {
    if (!this.isDate(dobString)) { return -1; }

    return moment().diff(dobString, 'years', false);
  }
}
