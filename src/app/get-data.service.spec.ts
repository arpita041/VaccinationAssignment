import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { GetDataService } from './get-data.service';
import { Post } from './post';

describe('GetDataService', () => {
  let service: GetDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetDataService]
    });
    service = TestBed.inject(GetDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() =>
{
  httpMock.verify();
});
});
