import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: BehaviorSubject<Client[]>;
  public headers = ['', '', 'Name', 'TotalCaHt', 'Tva', 'TotalTTC', 'State']
  public stateClient = StateClient;
  constructor(
    private clientService: ClientsService,
    private router: Router
  ) {
    this.collection$ = this.clientService.getBehaviorCollection();
    this.clientService.refreshCollection();
   }

  ngOnInit(): void {
  }

  public onChangeEditState(item: Client, $event: any) {
    item.state = $event.target.value;
    this.clientService.update(item).subscribe((updatedClient: Client) => {
      item = updatedClient;
    })
  }

  public onClickGoEdit(clientId: number): void {
    this.router.navigate(['clients', 'edit', clientId])
  }

  public onClickDelete(clientId: number): void {
    this.clientService.delete(clientId).subscribe()
  }
}
