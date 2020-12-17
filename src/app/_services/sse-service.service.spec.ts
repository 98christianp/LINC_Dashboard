import { TestBed } from '@angular/core/testing';

import { SseServiceService } from './sse-service.service';

describe('SseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SseServiceService = TestBed.get(SseServiceService);
    expect(service).toBeTruthy();
  });
});
