import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Input() init!: Client;
  @Output() submitCustom = new EventEmitter<Client>();
  public states = StateClient;
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.init.name],
      state: [this.init.state],
      tauxTva: [this.init.tauxTva],
      id: [this.init.id],
      totalCaHt: [this.init.totalCaHt],
      comment: [this.init.comment] 
    })
  }

  public onSubmit() {
    this.submitCustom.emit(this.form.value);
  }

}
