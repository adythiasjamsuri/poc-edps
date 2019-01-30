import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-disposal-request-editor',
  templateUrl: './disposal-request-editor.component.html',
  styleUrls: ['./disposal-request-editor.component.scss']
})
export class DisposalRequestEditorComponent implements OnInit {
  @ViewChild('stepTabs') stepTabs: TabsetComponent;

  public activeTab = 1;

  public nextTab() {
    this.stepTabs.tabs[this.activeTab].active = true;
  }

  public selectActiveTab(i) {
    this.activeTab = i;
  }

  public data: any = {
    items: [],
    attachments: [],
    status: 'DRAFTED',
    approvers: [{
      name: 'John Mayer',
      role: 'Singer 1',
      status: 'Not Yet Reviewed'
    },
    {
      name: 'Tom Odell',
      role: 'Singer 2',
      status: 'Not Yet Reviewed'
    }]
  };

  public disposedItemCategories: any[] = [
    { id: 1, name: 'Fixed Asset' },
    { id: 2, name: 'Inventory' },
    { id: 3, name: 'Low Value Asset' },
    { id: 4, name: 'Non-Inventory' }
  ];

  public proposedDisposals: any[] = [
    { id: 1, name: 'Proposed Disposal 1' },
    { id: 2, name: 'Proposed Disposal 2' },
  ];

  public disposalAreas: any[] = [
    { id: 1, name: 'Area 1' },
    { id: 2, name: 'Area 2' },
  ];

  public costCenters: any[] = [
    {
      id: 1,
      name: 'Cost Center 1',
      departmentName: 'Department CC1'
    },
    {
      id: 2,
      name: 'Cost Center 2',
      departmentName: 'Department CC2'
    }
  ];

  public products: any[] = [
    {
      id: 1,
      name: '5006435-0',
      description: 'AC NATIONAL SPLIT 3/4PK TYPE CS-C96KJ',
      location: 'Tuban',
      // quantity: 1,
      uom: 'Pcs',
      oc: 300000,
      ad: -300000,
      nbv: 0,
      dc: 0,
      gainLoss: 0
    },
    {
      id: 2,
      name: '5006435-1',
      description: 'FAN PANASONIC',
      location: 'Jakarta',
      // quantity: 1,
      uom: 'Pcs',
      oc: 200000,
      ad: -200000,
      nbv: 0,
      dc: 0,
      gainLoss: 0
    }
  ];

  public currencies: any[] = [
    {
      id: 1,
      code: 'IDR',
      rate: 14000
    }
  ];

  public addAttachment() {
    if (!this.data.attachments) {
      this.data.attachments = [];
    }

    this.data.attachments.push({
    });
  }

  public removeAttachment(index) {
    this.data.attachments.splice(index);
  }


  public addItem() {
    if (!this.data.items) {
      this.data.items = [];
    }

    this.data.items.push({
      quantity: 0
    });
  }

  public removeItem(index) {
    this.data.items.splice(index, 1);
  }

  public onChange(e, item) {
    item.productId = e.id;
    item.productName = e.name;
    item.location = e.location;
    item.description = e.description;
    item.nbv = e.nbv;
    item.ad = e.ad;
    item.dc = e.dc;
    item.gainLoss = e.gainLoss;
    item.oc = e.oc;
    item.uom = e.uom;
  }

  public onChangeAttachment(e, item) {
    console.log(e);
    console.log(item);
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

  constructor() {

  }

  ngOnInit() {
  }

}
