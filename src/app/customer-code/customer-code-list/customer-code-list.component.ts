import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomerCodeService } from '../customer-code.service';
import { CustomerCode } from '../customer-code';
import { BasicValidators } from '../../shared/basic-validators';

import { CustomerCodeModalComponent } from '../modal/customer-code-modal.component';

@Component({
  selector: 'app-customer-code-list',
  templateUrl: './customer-code-list.component.html',
  styleUrls: ['./customer-code-list.component.scss']
})
export class CustomerCodeListComponent implements OnInit {
  customerCodes: CustomerCode[];

  @ViewChild('customerCodeModal')
  public customerCodeModal: CustomerCodeModalComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerCodeService: CustomerCodeService
  ) {
  }
  
  ngOnInit() {
    this.getCustomerCodeAll();
  }

  public showModal(): void {
    console.log('showModal():void');
    this.customerCodeModal.modalShow()
  }

  outputEvent(customerCode) {
    // this.customerCodes.push(customerCode)
    this.getCustomerCodeAll()
  }

  newCustomerCode() {
    // this.customerCodeService.add()
  }

  detailCustomerCode(customerCode) {

    this.customerCodeModal.detailCustomerCode(customerCode)
  }

  duplicateCustomerCode(customerCode) {
    this.customerCodeModal.duplicateCustomerCode(customerCode)
  }

  deleteCustomerCode(customerCode) {
    if(!confirm('삭제하시겠습니까?')) {
      return false;
    }
    this.customerCodeService.remove(customerCode.id)
      .then(()=>{
        this.getCustomerCodeAll()
      })
  }

  deleteSelectedAll() {
    if(!confirm('삭제하시겠습니까?')) {
      return false;
    }
    let selectedCustomerCodes = this.customerCodes
      .filter(customerCode => customerCode.state);

    this.customerCodeService.removeAll(selectedCustomerCodes)
      .then(()=>{
        this.getCustomerCodeAll()
      })

  }

  findCustomerCodeAll(searchSrc: string, searchText: string) {
    console.log(searchSrc, searchText)
    this.customerCodeService.getAllBySearchText(searchSrc, searchText)
      .then(customerCodes => {
        this.customerCodes = customerCodes
        // this.customerCodes = customerCode.filter(res => {
        //   return res[searchSrc].includes(searchText)
        // })
      })
  }

  getCustomerCodeAll() {
    this.customerCodeService.getAll()
      .then(customerCode => this.customerCodes = customerCode)
  }

  checkAll(event) {
    this.customerCodes.forEach(x => x.state = event.target.checked)
  }
}
