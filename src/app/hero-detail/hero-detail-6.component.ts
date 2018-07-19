import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import {FormBuilder,Validators, FormGroupName, FormControlName, FormGroup} from '@angular/forms';
import {states, Address, Hero} from '../data-model';
import { HerosService } from '../heros.service';




@Component({
  selector: 'app-hero-detail-6',
  templateUrl: './hero-detail-6.component.html',
  styleUrls: ['./hero-detail-6.component.css']
})
export class HeroDetail6Component implements OnInit,OnChanges {
  
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
    this.heroForm.patchValue({
      name: this.hero.name
    })
  }
   
}
