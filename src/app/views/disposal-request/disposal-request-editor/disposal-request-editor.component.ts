import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { DisposalRequestService } from '../../../services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-disposal-request-editor',
  templateUrl: './disposal-request-editor.component.html',
  styleUrls: ['./disposal-request-editor.component.scss'],
})
export class DisposalRequestEditorComponent implements OnInit {


  constructor(
    private toastr: ToastrService,
    private disposalRequestService: DisposalRequestService,
    private router: Router
  ) {

  }

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
      role: 'HR Coordinator 1',
      status: 'Not Yet Reviewed'
    },
    {
      name: 'Tom Odell',
      role: 'HR Coordinator 2',
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
      quantity: 1,
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
      quantity: 1,
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

  public getItemColspan1() {
    return this.data.disposedItemCategory == 'Inventory' ? 7 : 6;
  }

  private transformData(data) {
    data.requestorName = 'James Bay';
    data.requestorId = '12345678';
    data.requestNo = (new Date()).getTime();
    data.requestDate = new Date();

    if (data.selectedCostCenter) {
      data.costCenterId = data.selectedCostCenter.id;
      data.costCenter = data.selectedCostCenter.name;
      data.departmentName = data.selectedCostCenter.departmentName;
    }
    return data;
  }

  public saveAsDraft(data) {
    this.disposalRequestService.create(this.transformData(data));

    // this.toastr.success('Request has been saved successfully.');
    alert(`Request has been saved successfully.`);

    this.router.navigate(['/disposal-requests/search-document']);
  }

  public submit(data) {
    data.status = 'SUBMITTED';
    this.disposalRequestService.create(this.transformData(data));

    // this.toastr.success('Request has been submitted successfully.');
    alert('Request has been submitted successfully.');

    this.router.navigate(['/disposal-requests/search-document']);
  }


  ngOnInit() {
  }

}
