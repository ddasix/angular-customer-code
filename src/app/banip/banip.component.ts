import { Component, OnInit } from '@angular/core';
import { BanipService } from './banip.service';

@Component({
  selector: 'app-banip',
  templateUrl: './banip.component.html',
  styleUrls: ['./banip.component.scss'],
  providers: [BanipService]
})
export class BanipComponent implements OnInit {

  constructor(private banipService: BanipService) { }

  ngOnInit() {
  }

}