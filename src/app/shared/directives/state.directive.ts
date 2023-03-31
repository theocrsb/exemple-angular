import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input('appState') state!: string;

  @HostBinding('class') elementClass!: string;

  constructor() { }
  
  ngOnChanges(): void {
    this.elementClass = `state-${this.state.toLowerCase()}`;
  }

}
