import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { DisposalRequestEditorComponent } from './disposal-request-editor/disposal-request-editor.component';
import { DisposalRequestEditorWDprComponent } from './disposal-request-editor-w-dpr/disposal-request-editor-w-dpr.component';
import { DisposalRequestViewComponent } from './disposal-request-view/disposal-request-view.component';


const routes: Routes = [
    {
        path: 'create',
        component: DisposalRequestEditorComponent,
        data: {
            title: 'Create Disposal Request'
        }
    },
    {
        path: 'create-w-dpr',
        component: DisposalRequestEditorWDprComponent,
        data: {
            title: 'Create Disposal Request with DPR'
        }
    },
    {
        path: 'detail',
        component: DisposalRequestViewComponent,
        data: {
            title: 'Disposal Requests'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisposalRequestRoutingModule { }
