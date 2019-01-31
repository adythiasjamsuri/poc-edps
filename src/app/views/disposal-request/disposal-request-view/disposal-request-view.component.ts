import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { DisposalRequestService } from '../../../services';

@Component({
  selector: 'app-disposal-request-view',
  templateUrl: './disposal-request-view.component.html',
  styleUrls: ['./disposal-request-view.component.scss']
})
export class DisposalRequestViewComponent implements OnInit {
  @Input() data;
  @Input() viewMode = false;

  constructor(public bsModalRef: BsModalRef,
    private disposalRequestService: DisposalRequestService) { }

  ngOnInit() {
  }

  public getTotalQuantity() {
    try {
      if (!this.data.items) {
        return 0;
      }
      return this.data.items.map(t => t.quantity).reduce((a, b) => { return parseInt(b) + parseInt(a); }, 0);
    }
    catch (Exception) {
      return 0;
    }
  }

  public getItemColspan1() {
    return this.data.disposedItemCategory == 'Inventory' ? 6 : 5;
  }

  public approve(data) {
    this.disposalRequestService.approve(data);
    this.bsModalRef.hide();
  }
}
