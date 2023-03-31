import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  public open : boolean  = false;
  /**
   * Experimentation TP NgSwitchCase
   */
  public cpt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.open = !this.open;
    console.log('La valeur de la prop est : ', this.open);
    
  }

  /**
   * Experimentation TP NgSwitchCase
   */
  public increment(): void {
    this.cpt++;
    if(this.cpt >3) {
      this.cpt = 0;
    }
  }
}
