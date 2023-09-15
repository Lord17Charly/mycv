import { TestBed } from '@angular/core/testing';

import { CertificacionesService } from './certificaciones.service';

describe('CertificacionesService', () => {
  let service: CertificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificacionesService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
