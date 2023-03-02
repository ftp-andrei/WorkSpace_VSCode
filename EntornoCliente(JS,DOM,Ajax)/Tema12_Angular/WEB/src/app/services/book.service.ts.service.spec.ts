import { TestBed } from '@angular/core/testing';

import { BookServiceTsService } from './book.service.ts.service';

describe('BookServiceTsService', () => {
  let service: BookServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
