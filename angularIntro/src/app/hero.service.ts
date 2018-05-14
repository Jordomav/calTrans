import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HEROES } from './mock-heroes';
import { HeroClass } from './hero';
import { HeroesComponent } from './heroes/heroes.component';
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  heroes: HeroClass[];

  private heroesUrl = 'api/heroes';

  // getHeroes(): HeroClass[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<HeroClass[]> {
    return this.http.get<HeroClass[]>(this.heroesUrl);
  }

  constructor(private http: HttpClient) { }

}
