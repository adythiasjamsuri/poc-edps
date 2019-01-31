import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposalRequestApprovalComponent } from './disposal-request-approval.component';

describe('DisposalRequestApprovalComponent', () => {
  let component: DisposalRequestApprovalComponent;
  let fixture: ComponentFixture<DisposalRequestApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposalRequestApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposalRequestApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
