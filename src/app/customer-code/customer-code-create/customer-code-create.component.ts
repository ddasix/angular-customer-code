import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-code-create',
  templateUrl: './customer-code-create.component.html',
  styleUrls: ['./customer-code-create.component.scss']
})
export class CustomerCodeCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
