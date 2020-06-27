import { TestBed } from '@angular/core/testing';

import { CheckUpdateService } from './check-update.service';

describe('CheckUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckUpdateService = TestBed.get(CheckUpdateService);
    expect(service).toBeTruthy();
  });
});
