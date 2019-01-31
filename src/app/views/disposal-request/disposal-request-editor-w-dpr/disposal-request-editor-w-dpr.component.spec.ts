import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposalRequestEditorWDprComponent } from './disposal-request-editor-w-dpr.component';

describe('DisposalRequestEditorWDprComponent', () => {
  let component: DisposalRequestEditorWDprComponent;
  let fixture: ComponentFixture<DisposalRequestEditorWDprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposalRequestEditorWDprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposalRequestEditorWDprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
