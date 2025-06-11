import { AdminGuard } from './admin-guard';

describe('AuthGuard', () => {
  it('should create an instance', () => {
    expect(new AdminGuard()).toBeTruthy();
  });
});
