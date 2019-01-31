import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisposalRequestService {
  private storageKey: string = `DISPOSAL_REQUEST`;

  constructor() { }

  getAll() {
    return JSON.parse(localStorage.getItem(this.storageKey)) || [];
  }

  create(data) {
    let datas = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    datas.push(data);

    localStorage.setItem(this.storageKey, JSON.stringify(datas));
  }

  approve(data) {
    let datas = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    datas.forEach(d => {
      if (d.requestNo == data.requestNo) {
        d.approvers[0].status = 'Approved';
      }
    });

    localStorage.setItem(this.storageKey, JSON.stringify(datas));

  }
}
