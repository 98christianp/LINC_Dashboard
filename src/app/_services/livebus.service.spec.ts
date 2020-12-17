import { TestBed } from '@angular/core/testing';

import { LivebusService } from './livebus.service';

describe('LivebusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivebusService = TestBed.get(LivebusService);
    expect(service).toBeTruthy();
  });
});
