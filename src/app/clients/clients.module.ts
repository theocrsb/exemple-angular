import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './page/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './page/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './page/page-edit-client/page-edit-client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormClientComponent } from './components/form-client/form-client.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientComponent,
    PageEditClientComponent,
    FormClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}
  ]
})
export class ClientsModule { }
