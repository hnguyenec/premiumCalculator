import { TestBed, inject } from '@angular/core/testing';
import * as moment from 'moment';
import { AgeHelpersService } from './age-helpers.service';
import { DateFormat } from './constants';

describe('AgeHelpersService', () => {
  const validDate = '20 Jul 1979';
  const invalidDate = '40 Jul 1979';
  const age38 = '20 Jul 1979';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeHelpersService]
    });
  });

  it('should be created', inject([AgeHelpersService], (service: AgeHelpersService) => {
    expect(service).toBeTruthy();
  }));

  it('should return false if date string is invalid', inject([AgeHelpersService], (service: AgeHelpersService) => {
    expect(service.isDate(invalidDate)).toBeFalsy();
  }));

  it('should return true if date string is valid', inject([AgeHelpersService], (service: AgeHelpersService) => {
    expect(service.isDate(validDate)).toBeTruthy();
  }));

  it('should return -1 if date string is invalid', inject([AgeHelpersService], (service: AgeHelpersService) => {
    expect(service.getAge(invalidDate)).toEqual(-1);
  }));

  it('should return greater than -1 if date string is valid', inject([AgeHelpersService], (service: AgeHelpersService) => {
    expect(service.getAge(validDate)).toBeGreaterThan(-1);
  }));

  it(`should return 38 if date string is ${age38}`, inject([AgeHelpersService], (service: AgeHelpersService) => {
    expect(service.getAge(age38)).toEqual(38);
  }));

  // test age if the same month as current and one day ealier
  // Example:
  // Current: 06 Jul 2018
  // Date of birth: 07 Jul 2000
  // Age should be 17
  it('should return one age ealier if month is the same but day of birth is 1 day later',
    inject([AgeHelpersService], (service: AgeHelpersService) => {
      const now = moment();
      const dob = moment().add(1, 'day').subtract(18, 'years');

      const expectAge = now.year() - dob.year() - 1;

      expect(service.getAge(dob.format(DateFormat.toUpperCase()))).toEqual(expectAge);
  }));

});
