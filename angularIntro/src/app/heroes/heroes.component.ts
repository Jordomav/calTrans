import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero = 'Batman';

  heroForm = {
    id: '',
    name: ''
  };

  validateInput(newHero, extraData, evenMoreData){
    if (extraData === evenMoreData && newHero.name != '') {
      return newHero;
    }
  }

  onSubmit(extraData, evenMoreData) {
    if (this.validateInput(this.heroForm, extraData, evenMoreData)) {
      alert(this.heroForm.name);
    }
    // console.log(extraData);
    // console.log(evenMoreData);
    // console.log(this.heroForm);
    // if (extraData === evenMoreData) {
      // console.log(this.heroForm);
    //   alert(this.heroForm.name);
    // } else {
    //   console.log('Make sure your params are equal.');
    // }

   
  }

}
