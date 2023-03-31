import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public order$!: Observable<Order>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
    ) {
    this.activatedRoute.paramMap.subscribe((data) => {
      console.log(data.get('orderId'));
      const orderId = Number(data.get('orderId'));
      this.order$ = this.orderService.getById(orderId);
    })
   }

  ngOnInit(): void {
  }

  public onSubmitUpdateOrder(orderToUpdate: Order): void {
    this.orderService.update(orderToUpdate).subscribe(() => {
      // Rediriger l'utilisateur vers la liste des commandes
      this.router.navigate(['orders']);
    })
  }

}
