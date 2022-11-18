import { TestBed } from '@angular/core/testing';

import { ServerReqService } from './server-req.service';

describe('ServerReqService', () => {
  let service: ServerReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
