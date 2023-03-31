import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public prenomAlea : string = 'Choix aléa';
  public numVersion!: number;

  constructor(private versionService: VersionService) {
    this.versionService.getBehaveNumVersion().subscribe(numVersion => this.numVersion = numVersion)
   }

  ngOnInit(): void {
    const tabPrenom = ['Amal', 'Alexandre', 'Zied', 'Erwan', 'Thomas', 'Paul', 'Grégory', 'Dorian'];
    const nombreAlea = Math.floor(Math.random() * tabPrenom.length );

    this.prenomAlea = tabPrenom[nombreAlea];
    console.log(this.prenomAlea);
  }

}
