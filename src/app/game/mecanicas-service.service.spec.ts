import { TestBed } from '@angular/core/testing';

import { MecanicasServiceService } from './mecanicas-service.service';

describe('MecanicasServiceService', () => {
  let service: MecanicasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MecanicasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
