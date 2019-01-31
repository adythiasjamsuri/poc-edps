import { Component, OnInit } from '@angular/core';
import { DisposalRequestService } from '../../../services';

@Component({
  selector: 'app-disposal-request-search-document',
  templateUrl: './disposal-request-search-document.component.html',
  styleUrls: ['./disposal-request-search-document.component.scss']
})
export class DisposalRequestSearchDocumentComponent implements OnInit {

  constructor(
    private disposalRequestService: DisposalRequestService
  ) { }

  public datas = [];

  ngOnInit() {
    this.datas = this.disposalRequestService.getAll();
  }

}
