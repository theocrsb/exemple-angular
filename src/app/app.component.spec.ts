import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// describe écrire un ensemble de test
describe('AppComponent', () => {
  // beforeEach execute du code avant chaque test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // it permet d'écrire un test unitaire
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    // expect test un partie  
    expect(app).toBeTruthy();

    // .toBeTruthy() on test si la valeur de retour est true
  });

  it(`should have as title 'angular-crm-novembre-atos'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-crm-novembre-atos');
  });

  it('should render title', () => {
    // Création d'une instance de notre app Component dans l'environnement de test fournit par Angular
    const fixture = TestBed.createComponent(AppComponent);
    // Initialisation du template 
    // Lier correctement (binder) les propriété de notre instance  de class à notre template
    fixture.detectChanges();
    

    const compiled = fixture.nativeElement as HTMLElement;

    // On cible un élément HTML de la forme 
    // <element class="content">
    //  <span> Texte qui est testé</span>  
    // </element>
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-crm-novembre-atos app is running!');
  });
});
