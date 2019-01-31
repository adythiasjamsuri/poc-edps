import { Component, OnInit } from '@angular/core';
import { DisposalRequestService } from '../../../services';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DisposalRequestViewComponent } from '../disposal-request-view/disposal-request-view.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-disposal-request-approval',
  templateUrl: './disposal-request-approval.component.html',
  styleUrls: ['./disposal-request-approval.component.scss']
})
export class DisposalRequestApprovalComponent implements OnInit {
  constructor(
    private disposalRequestService: DisposalRequestService,
    private modalService: BsModalService,
    private toastrService: ToastrService
  ) { }

  private bsModalRef: BsModalRef;

  public datas = [];

  ngOnInit() {

    this.datas = this.disposalRequestService.getAll();
    this.datas = this.datas.filter(d => d.status != 'DRAFTED');
  }

  openDetail(data) {

    this.bsModalRef = this.modalService.show(DisposalRequestViewComponent, { class: 'modal-xl', initialState: { data: data } });
  }

}
