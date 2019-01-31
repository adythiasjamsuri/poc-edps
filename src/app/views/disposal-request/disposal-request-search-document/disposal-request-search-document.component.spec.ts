import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposalRequestSearchDocumentComponent } from './disposal-request-search-document.component';

describe('DisposalRequestSearchDocumentComponent', () => {
  let component: DisposalRequestSearchDocumentComponent;
  let fixture: ComponentFixture<DisposalRequestSearchDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposalRequestSearchDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposalRequestSearchDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
