import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalDirective } from 'angular-bootstrap-md';
import { CustomerCodeService } from '../customer-code.service';

import { CustomerCode } from '../customer-code';

@Component({
  selector: 'customer-code-modal',
  templateUrl: './customer-code-modal.component.html',
  styleUrls: ['./customer-code-modal.component.scss']
})
export class CustomerCodeModalComponent {

  @ViewChild('staticModal')
  public staticModal:ModalDirective;
  public isModalShown:boolean = true;
  @Output()
  outputProperty = new EventEmitter<CustomerCode>();
  isNew: boolean = true;

  myform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerCodeService: CustomerCodeService
  ) {
    this.initForm();
  }

  modalShow() {
    console.log('modal Show');
    this.staticModal.show();
  }

  detailCustomerCode(customerCode) {
    this.myform.setValue({
      id: customerCode.id,
      code: customerCode.code,
      ceo: customerCode.ceo,
      etprNo: customerCode.etprNo,
      corpNm: customerCode.corpNm,
      corpType: customerCode.corpType,
      postCode: customerCode.postCode,
      addr1: customerCode.addr1,
      addr2: customerCode.addr2,
      bldNo: customerCode.bldNo,
      suplCd: customerCode.suplCd,
      telNo: customerCode.telNo
    })
    this.isNew = false;
    
    this.staticModal.show();
  }

  duplicateCustomerCode(customerCode) {
    this.myform.setValue({
      id: '',
      code: '',
      ceo: customerCode.ceo,
      etprNo: customerCode.etprNo,
      corpNm: customerCode.corpNm,
      corpType: customerCode.corpType,
      postCode: customerCode.postCode,
      addr1: customerCode.addr1,
      addr2: customerCode.addr2,
      bldNo: customerCode.bldNo,
      suplCd: customerCode.suplCd,
      telNo: customerCode.telNo
    })
    this.isNew = true;
    
    this.staticModal.show();
  }

  newCustomerCode() {
    console.log(this.isNew)
    if(this.isNew) {
      this.customerCodeService.add(this.myform.value)
        .then(res => {
          this.staticModal.hide();
          this.myform.reset();
          this.outputProperty.emit(res)
        })
    } else {
      this.customerCodeService.update(this.myform.value)
        .then(res => {
          this.staticModal.hide();
          this.myform.reset();
          this.outputProperty.emit(res)
        })
    }
  }

  onHidden() {
    this.myform.reset();
    this.isNew = true;
  }

  private initForm() {
    this.myform = this.formBuilder.group({
      id: [],
      code: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      ceo: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      etprNo: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      corpNm: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      corpType: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      postCode: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      addr1: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      addr2: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      bldNo: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      suplCd: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      telNo: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    });
  }
}
