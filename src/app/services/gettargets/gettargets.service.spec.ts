import { TestBed } from '@angular/core/testing';

import { GettargetsService } from './gettargets.service';

describe('GettargetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GettargetsService = TestBed.get(GettargetsService);
    expect(service).toBeTruthy();
  });
});
