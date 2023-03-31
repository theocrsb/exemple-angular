import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private numVersion$ = new BehaviorSubject(1);

  constructor() { }

  public incrementNumVersion(): void {
    this.numVersion$.next(this.numVersion$.value + 1);
  }

  public getBehaveNumVersion(): BehaviorSubject<number> {
    return this.numVersion$;
  }
}
