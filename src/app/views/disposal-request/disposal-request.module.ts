import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisposalRequestRoutingModule } from './disposal-request-routing.module';
import { DisposalRequestEditorComponent } from './disposal-request-editor/disposal-request-editor.component';
import { BsDatepickerModule, TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    DisposalRequestEditorComponent
  ],
  imports: [
    FormsModule,
    TabsModule,
    DisposalRequestRoutingModule,
    BsDatepickerModule.forRoot()
  ]
})
export class DisposalRequestModule { }
