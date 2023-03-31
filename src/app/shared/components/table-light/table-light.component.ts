import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit, OnChanges {
  @Input() public headers!: string[];

  constructor() {
    console.log('new Instance');
    console.log(this.headers);
  }

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.headers);
  }

  ngOnChanges(): void {
    console.log('onChange');
    console.log(this.headers);
  }



}
