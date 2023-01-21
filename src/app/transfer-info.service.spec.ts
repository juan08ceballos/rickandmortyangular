import { TestBed } from '@angular/core/testing';

import { TransferInfoService } from './transfer-info.service';

describe('TransferInfoService', () => {
  let service: TransferInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
