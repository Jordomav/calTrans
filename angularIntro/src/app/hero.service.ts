import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { HeroClass } from './hero';
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  heroes: HeroClass[];

  newHero = {
    id: null,
    name: '',
    home: ''
  };

  addHero() {
    this.heroes.push(this.newHero);
  }

  getHeroes(): HeroClass[] {
    return HEROES;
  }

  constructor() { }

}
