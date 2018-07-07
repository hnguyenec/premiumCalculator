import { TestBed, inject } from '@angular/core/testing';

import { PremiumHelpersService } from './premium-helpers.service';

describe('PremiumHelpersService', () => {
  const maleFactor = 1.2;
  const femaleFactor = 1.1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PremiumHelpersService]
    });
  });

  it('should be created', inject([PremiumHelpersService], (service: PremiumHelpersService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 0 if age = 15', inject([PremiumHelpersService], (service: PremiumHelpersService) => {
    expect(service.calculatePremium(15, maleFactor)).toEqual(0);
  }));

  it('should return 0 if age = 66', inject([PremiumHelpersService], (service: PremiumHelpersService) => {
    expect(service.calculatePremium(66, maleFactor)).toEqual(0);
  }));

  it('should return > 0 if age = 60', inject([PremiumHelpersService], (service: PremiumHelpersService) => {
    expect(service.calculatePremium(60, maleFactor)).toBeGreaterThan(0);
  }));

  it('MALE: should return correct result', inject([PremiumHelpersService], (service: PremiumHelpersService) => {
    const expectValue = 58*maleFactor*100;
    expect(service.calculatePremium(58, maleFactor)).toEqual(expectValue.toFixed(1));
  }));

  it('FEMALE: should return correct result', inject([PremiumHelpersService], (service: PremiumHelpersService) => {
    const expectValue = 58*femaleFactor*100;
    expect(service.calculatePremium(58, femaleFactor)).toEqual(expectValue.toFixed(1));
  }));
});
