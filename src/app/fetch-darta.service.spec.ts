import { TestBed, inject } from '@angular/core/testing';

import { FetchDartaService } from './fetch-darta.service';

describe('FetchDartaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchDartaService]
    });
  });

  it('should be created', inject([FetchDartaService], (service: FetchDartaService) => {
    expect(service).toBeTruthy();
  }));
});
