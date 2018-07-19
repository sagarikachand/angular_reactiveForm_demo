
import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import {FormBuilder,Validators, FormGroupName, FormControlName, FormGroup, FormArrayName,FormArray} from '@angular/forms';
import {states, Address, Hero} from '../data-model';
import { HerosService } from '../heros.service';





@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit,OnChanges {
  // Call create form , This will build the form model 
  constructor(private fb :FormBuilder, private herosService:HerosService) { 
    this.createForm();
  }
 @Input() hero:Hero;

  heroForm:FormGroup;
  ngOnInit() {
    console.log("oninit called")
    console.log(this.hero)
  }
 
  // ngOnChanges run every time The input parameters change. So this a good place to call rebuild form
  ngOnChanges(){ console.log("onchanges called");this.rebuildForm()
  }
states=states;
  createForm(){
    this.heroForm= this.fb.group({  
      name:['',[Validators.required,Validators.minLength(3)] ],
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
  get name() { return this.heroForm.get('name'); }

  //  Setting the form array control.
  setAddresses(addresses){
    const addressgrp= addresses.map(adrs=> this.fb.group(adrs));
    const addressFromArray= this.fb.array(addressgrp);
    this.heroForm.setControl('secretLiars',addressFromArray)

  }
  // Adding to forms array 
  addLiar(){
    this.secretLiars.push(this.fb.group(new Address()))
  }

  revert(){
    this.rebuildForm();
  }

  onSave(){
    const updatedHero= this.prepareSave();
    this.herosService.updateHero(updatedHero).subscribe(
      updatedHero=>{this.hero=updatedHero}
    );
    this.rebuildForm();
  }
   
  prepareSave(){
    const formModel=this.heroForm.value;
    const secretLiarsDeepCopy= formModel.secretLiars.map(
      address=> Object.assign({}, address)
    )

    const saveHero:Hero={
      id:this.hero.id,
      name:formModel.name as string,
      // addresses: formModel.secretLairs  --> Bad
      addresses: secretLiarsDeepCopy
    }
    return saveHero;
  }
}
