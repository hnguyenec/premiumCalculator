import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremiumHelpersService {
  calculatePremium(age, genderFactor) {
    if (age === -1) {
      return -1;
    }

    if (age > 65 || age < 18) {
      return 0;
    } else {
      return (age * genderFactor * 100).toFixed(1);
    }
  }
}
