import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { DetailByStateComponent } from './detail-by-state.component';

describe('DetailByStateComponent', () => {
  let component: DetailByStateComponent;
  let fixture: ComponentFixture<DetailByStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailByStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
