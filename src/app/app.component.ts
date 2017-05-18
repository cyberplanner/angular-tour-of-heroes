import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

  // line: 33 From AppComponent.heroes  = HEROES;
  // line: 34 *ngFor iterates over the heroes array and assign an element to 'hero' each time
    // (click)event listener of the type OnClick that trigers a function
    // onSelect(hero) function takes the hero assigned by *ngFor.. it lives in AppComponent class
    // The css class 'selected' will be attached if hero is === to selectedHero
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <h2>Heroes:</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero" >
      <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hr/>

    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],

})

export class AppComponent {
  // Class initialised with:
  title   = 'Tour of Heroes'; // Generic string title property
  heroes  = HEROES; // heroes property is equal to HEROES array/constant
  selectedHero: Hero; //Hero is a placeholder, I think!

  // Class method
  onSelect(hero: Hero): void { // the function takes the hero assigned by *ngFor and
    this.selectedHero = hero; // assign it as this.class's selectedHero
  }

}
