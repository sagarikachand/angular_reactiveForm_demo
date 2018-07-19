import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import {FormBuilder,Validators, FormGroupName, FormControlName, FormGroup, FormArrayName,FormArray} from '@angular/forms';
import {states, Address, Hero} from '../data-model';
import { HerosService } from '../heros.service';





@Component({
  selector: 'app-hero-detail-8',
  templateUrl: './hero-detail-8.component.html',
  styleUrls: ['./hero-detail-8.component.css']
})
export class HeroDetail8Component implements OnInit,OnChanges {
  
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
      secretLiars: this.fb.array([]),
      power: '',
      sidekick: ''
      })
  }

  rebuildForm(){
   
    this.heroForm.reset({
      name: this.hero.name,
     
    })
    this.setAddresses(this.hero.addresses)
  }
  get secretLiars() :FormArray{
    return this.heroForm.get('secretLiars') as FormArray
  }
  setAddresses(addresses){
    const addressgrp= addresses.map(adrs=> this.fb.group(adrs));
    const addressFromArray= this.fb.array(addressgrp);
    this.heroForm.setControl('secretLiars',addressFromArray)

  }
  addLiar(){
    this.secretLiars.push(this.fb.group(new Address()))
  }
   
}
