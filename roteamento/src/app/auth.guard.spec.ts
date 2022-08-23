import { TestBed } from '@angular/core/testing';

import { AllGuard } from './auth.guard';

describe('AllGuard', () => {
  let guard: AllGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
