import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HEROES } from '../mock-heroes';
import { Observable } from 'rxjs';
import { HeroClass } from '../hero';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  heroes = HEROES;
  hero = {};

  newValue = null;

  tempHero = {};

  isVisible = false;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  // private heroesUrl = "/getHeroes";

  // getHeroes (): Observable<HeroClass[]> {
  //   return this.http.get<HeroClass[]>(this.heroesUrl);
  // }

  toggleInput(){
    this.isVisible = !this.isVisible;
  }

  editHero(modifier) {
    if (modifier === 'id') {
      this.tempHero = this.hero;
      this.tempHero.id = this.newValue;
      this.newValue = null;
    } else if (modifier === 'name') {
      console.log('here')
      this.tempHero = this.hero;
      this.tempHero.name = this.newValue;
      this.newValue = null;
    } else if (modifier === 'home') {
      this.tempHero = this.hero;
      this.tempHero.home = this.newValue;
      this.newValue = null;
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.heroes.forEach((item) => {
        if (item.id == params.id) {
          this.hero = item;
        }
      })
  })
}
}
