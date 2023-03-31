import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private url = environment.urlApi;

  private collection$ = new BehaviorSubject<Client[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  public refreshCollection(): void {
    this.http.get<Client[]>(`${this.url}/clients`).pipe(
      map(tabJson => {
        return tabJson.map(client => new Client(client))
      })
    ).subscribe(
      (tabClient: Client[]) => {
        this.collection$.next(tabClient)
      }
    );
  }

  public getById(clientId: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/clients/${clientId}`);
  }
  
  public getBehaviorCollection(): BehaviorSubject<Client[]> {
    return this.collection$;
  }

  public add(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/clients`, client);
  }

  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/clients/${client.id}`, client);
  }

  public delete(clientId: number): Observable<Client> {
    return this.http.delete<Client>(`${this.url}/clients/${clientId}`).pipe(
      tap(() => this.refreshCollection())
    );
  }
}
