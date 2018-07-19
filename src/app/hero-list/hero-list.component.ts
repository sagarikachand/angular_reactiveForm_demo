

import { Component, OnInit } from '@angular/core';
import { Hero } from '../data-model'
import { HerosService } from '../heros.service'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heros: Hero[];
  isLoading: boolean;
  selectedHero: Hero;
  constructor(private herosService: HerosService) { }

  ngOnInit() {
    this.resetHero();
  }

  resetHero() {
    this.isLoading = true;
    this.herosService.getHeros()
      .subscribe((response) => {
        this.heros = response;
        this.isLoading = false;
        this.selectedHero = undefined;
      })
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    console.log(`select hero is ${this.selectedHero.name}`)
  }

  


}
