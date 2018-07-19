import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Hero, heros} from './data-model'
import {of} from 'rxjs/observable/of'
import 'rxjs/add/operator/delay'

@Injectable()
export class HerosService {
delayMs=500;
  constructor() { }

  getHeros():Observable<Hero[]>{
    return  of(heros).delay(this.delayMs);
  }

  updateHero(hero){
    const oldHero=heros.find(h=> h.id==hero.id);
    const newHero= Object.assign(oldHero,hero);
    return of(newHero).delay(this.delayMs)
  }

}
