import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HEROES } from '../mock-heroes';
import { Observable } from 'rxjs';
// import { HeroClass } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes = this.heroService.heroes;
  newHero = this.heroService.newHero;
  addHero = this.heroService.addHero(); 

  constructor(private http: HttpClient, private heroService: HeroService) { }

  // private heroes;
  // heroUrl = "localhost:3000/getHeroes"
  // getHeroes(): Observable<HeroClass[]> {
  //   console.log(this.http.get<HeroClass[]>(this.heroUrl));
  //   return this.http.get<HeroClass[]>(this.heroUrl);
  // }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
    // this.heroes = this.getHeroes();
  }
}
