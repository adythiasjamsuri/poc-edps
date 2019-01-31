import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-disposal-request-view',
  templateUrl: './disposal-request-view.component.html',
  styleUrls: ['./disposal-request-view.component.scss']
})
export class DisposalRequestViewComponent implements OnInit {
  @Input() data;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
