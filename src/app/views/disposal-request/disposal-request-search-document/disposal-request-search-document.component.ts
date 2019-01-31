import { Component, OnInit } from '@angular/core';
import { DisposalRequestService } from '../../../services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { DisposalRequestViewComponent } from '../disposal-request-view/disposal-request-view.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-disposal-request-search-document',
  templateUrl: './disposal-request-search-document.component.html',
  styleUrls: ['./disposal-request-search-document.component.scss']
})
export class DisposalRequestSearchDocumentComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(
    private disposalRequestService: DisposalRequestService,
    private toastrService: ToastrService,
    private modalService: BsModalService
  ) { }

  public datas = [];

  ngOnInit() {
    this.datas = this.disposalRequestService.getAll();
  }

  openDetail(data) {

    this.bsModalRef = this.modalService.show(DisposalRequestViewComponent, { class: 'modal-xl', initialState: { data: data, viewMode: true } });
  }
}
