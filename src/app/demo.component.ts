import { Component, OnInit } from '@angular/core';
import {Hero} from './data-model'
import {HerosService} from './heros.service'

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  heros:Hero[];
  isLoading:boolean;
  selectedHero:Hero;
  constructor(private herosService :HerosService) { }

  ngOnInit() {
    this.resetHero();
  }

  resetHero(){
    this.isLoading=true;
    this.herosService.getHeros()
      .subscribe((response)=>{
        this.heros=response; 
        this.isLoading=false;
        this.selectedHero=undefined;
      })
  }

  selectHero(hero:Hero){
    this.selectedHero=hero;
    console.log(`select hero is ${this.selectedHero.name}`)
  }

   choices=[
    'Just a FormControl',
    'FormControl in a FormGroup',
    'Simple FormBuilder group',
    'Group with multiple controls',
    'Nested FormBuilder group',
    'PatchValue',
    'SetValue',
    'FormArray',
    'Final'
   ].map(c=> c + ' demo')
   final=this.choices.length;
   demo=this.final;

   changedChoice(demo:number){
     console.log(demo + "selectedIn");
     this.demo= demo +1;
     console.log("demo number" + this.demo)
   }


}
