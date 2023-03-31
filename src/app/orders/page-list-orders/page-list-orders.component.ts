import { Component,OnDestroy,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public titrePage!:  string;
  public headers: string[];
  public stateOrder = StateOrder;
  
  public collection$!: BehaviorSubject<Order[]>;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
    console.log('Page List ---New Instance');
    this.titrePage = 'List Order';
    this.headers = ['', '', "Client","TjmHt","NbJours","Tva", "TotalHT", "TotalTTC", "Type","State"];

    this.collection$ = this.orderService.collection$;
    this.orderService.refreshCollection();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // Unsubscribe de nos flux de données provenant d'observables chaud

  } 

  onChangeUpdateState(item: Order, event: any): void {
    item.state = event.target.value;
    this.orderService.update(item).subscribe(
      (updatedOrder) => {
        item.state = updatedOrder.state;
      }
    );
  }

  public onClickGoEdit(orderId: number): void {
    this.router.navigate(['orders', 'edit', orderId]);
    // /orders/edit/{{id}}
  }

  public onClickDeleteOrder(orderId: number): void {
    this.orderService.delete(orderId).subscribe((resp) => {
      console.log(resp);
      //Possibilité d'ajout de message d'info ici 
    })
  }
}
