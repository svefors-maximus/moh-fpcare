import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusResultsComponent } from './status-results.component';

describe('StatusResultsComponent', () => {
  let component: StatusResultsComponent;
  let fixture: ComponentFixture<StatusResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
