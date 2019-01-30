import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposalRequestEditorComponent } from './disposal-request-editor.component';

describe('DisposalRequestEditorComponent', () => {
  let component: DisposalRequestEditorComponent;
  let fixture: ComponentFixture<DisposalRequestEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposalRequestEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposalRequestEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
