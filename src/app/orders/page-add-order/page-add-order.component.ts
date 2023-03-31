import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public initOrder: Order;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
    this.initOrder = new Order();
   }

  ngOnInit(): void {
  }

  public onSubmitNewOrder(form: Order): void {
    console.log(form);
    this.orderService.add(form).subscribe(() => {
      console.log('Ajout')
      this.router.navigate(['orders']);
    })
  }

}
