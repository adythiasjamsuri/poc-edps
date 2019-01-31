import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { DisposalRequestEditorComponent } from './disposal-request-editor/disposal-request-editor.component';
import { DisposalRequestEditorWDprComponent } from './disposal-request-editor-w-dpr/disposal-request-editor-w-dpr.component';
import { DisposalRequestViewComponent } from './disposal-request-view/disposal-request-view.component';
import { DisposalRequestSearchDocumentComponent } from './disposal-request-search-document/disposal-request-search-document.component';
import { DisposalRequestApprovalComponent } from './disposal-request-approval/disposal-request-approval.component';


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
        path: 'search-document',
        component: DisposalRequestSearchDocumentComponent,
        data: {
            title: 'Disposal Requests'
        }
    },
    {
        path: 'detail',
        component: DisposalRequestViewComponent,
        data: {
            title: 'Disposal Requests'
        }
    },
    {
        path: 'approval',
        component: DisposalRequestApprovalComponent,
        data: {
            title: 'Disposal Requests Approval'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisposalRequestRoutingModule { }
