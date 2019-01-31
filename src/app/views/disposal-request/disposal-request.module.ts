import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisposalRequestRoutingModule } from './disposal-request-routing.module';
import { DisposalRequestEditorComponent } from './disposal-request-editor/disposal-request-editor.component';
import { BsDatepickerModule, TabsModule, AlertModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { DisposalRequestViewComponent } from './disposal-request-view/disposal-request-view.component';
import { DisposalRequestEditorWDprComponent } from './disposal-request-editor-w-dpr/disposal-request-editor-w-dpr.component';

@NgModule({
  declarations: [
    DisposalRequestEditorComponent,
    DisposalRequestViewComponent,
    DisposalRequestEditorWDprComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    DisposalRequestRoutingModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,
    AlertModule.forRoot()
  ]
})
export class DisposalRequestModule { }
