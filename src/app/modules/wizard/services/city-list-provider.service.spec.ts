import { TestBed } from '@angular/core/testing';

import { CityListProviderService } from './city-list-provider.service';

describe('CityListProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityListProviderService = TestBed.get(CityListProviderService);
    expect(service).toBeTruthy();
  });
});
