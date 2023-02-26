import { TestBed } from '@angular/core/testing';

import { GuardRouterGuard } from './guard-router.guard';

describe('GuardRouterGuard', () => {
  let guard: GuardRouterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardRouterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
