import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisposalRequestRoutingModule } from './disposal-request-routing.module';
import { DisposalRequestEditorComponent } from './disposal-request-editor/disposal-request-editor.component';
import { BsDatepickerModule, TabsModule, AlertModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
// import { ToastrModule } from 'ngx-toastr';
import { DisposalRequestViewComponent } from './disposal-request-view/disposal-request-view.component';
import { DisposalRequestEditorWDprComponent } from './disposal-request-editor-w-dpr/disposal-request-editor-w-dpr.component';
import { DisposalRequestSearchDocumentComponent } from './disposal-request-search-document/disposal-request-search-document.component';
import { DisposalRequestApprovalComponent } from './disposal-request-approval/disposal-request-approval.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    DisposalRequestEditorComponent,
    DisposalRequestViewComponent,
    DisposalRequestEditorWDprComponent,
    DisposalRequestSearchDocumentComponent,
    DisposalRequestApprovalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    DisposalRequestRoutingModule,
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    NgSelectModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    DisposalRequestViewComponent
  ]
})
export class DisposalRequestModule { }
