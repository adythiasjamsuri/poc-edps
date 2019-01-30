import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    DisposalRequestEditorComponent
} from './disposal-request-editor/disposal-request-editor.component';


const routes: Routes = [
    {
        path: 'create',
        component: DisposalRequestEditorComponent,
        data: {
            title: 'DisposalRequest'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisposalRequestRoutingModule { }
