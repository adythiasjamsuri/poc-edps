import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposalRequestViewComponent } from './disposal-request-view.component';

describe('DisposalRequestViewComponent', () => {
  let component: DisposalRequestViewComponent;
  let fixture: ComponentFixture<DisposalRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposalRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposalRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
