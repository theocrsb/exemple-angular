import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  public client$!: Observable<Client>;
  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientsService,
    private router: Router
  ) { 
    this.route.paramMap.subscribe((param) => {
      const clientId = Number(param.get('clientId'));
      this.client$ = this.clientsService.getById(clientId);
    })
  }

  ngOnInit(): void {
  }

  public onSubmitEditClient(client: Client) {
    this.clientsService.update(client).subscribe(() => {
      this.router.navigate(['clients'])
    })
  }

}
