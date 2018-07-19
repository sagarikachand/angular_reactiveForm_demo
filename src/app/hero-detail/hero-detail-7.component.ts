import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import {FormBuilder,Validators, FormGroupName, FormControlName, FormGroup} from '@angular/forms';
import {states, Address, Hero} from '../data-model';
import { HerosService } from '../heros.service';




@Component({
  selector: 'app-hero-detail-7',
  templateUrl: './hero-detail-7.component.html',
  styleUrls: ['./hero-detail-7.component.css']
})
export class HeroDetail7Component implements OnInit,OnChanges {
  
  constructor(private fb :FormBuilder) { 
    this.createForm();
  }
 @Input() hero:Hero;

  heroForm:FormGroup;
  ngOnInit() {
    console.log("oninit called")
    console.log(this.hero)
  }
 
  ngOnChanges(){ console.log("onchanges called");this.rebuildForm()
  }
states=states;
  createForm(){
    this.heroForm= this.fb.group({  
      name:['',Validators.required],
      address:this.fb.group(new Address()),
      power: '',
      sidekick: ''
      })
  }

  rebuildForm(){
    this.heroForm.reset();
    this.heroForm.setValue({
      name: this.hero.name,
      address:this.hero.addresses[0] || new Address(),
      power:'flight',
      sidekick:''
    })
  }
   
}
