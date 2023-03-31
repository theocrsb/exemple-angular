import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private versionService: VersionService) { }

  ngOnInit(): void {
  }

  onClickIncrement(): void {
    this.versionService.incrementNumVersion();
  }

}
