import { TestBed } from '@angular/core/testing';

import { NomineeApiService } from './nominee-api.service';

describe('NomineeApiService', () => {
  let service: NomineeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomineeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
