import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormGroupName, FormControlName} from '@angular/forms';
import {states} from '../data-model'

@Component({
  selector: 'app-hero-detail-5',
  templateUrl: './hero-detail-5.component.html',
  styleUrls: ['./hero-detail-5.component.css']
})
export class HeroDetail5Component implements OnInit {

  constructor(private fb :FormBuilder) { }

  ngOnInit() {
  }

states=states;
  
   heroForm= this.fb.group({  
     name:['',Validators.required],
     address:this.fb.group({
      street: '',
      city: '',
      state: '',
      zip: '',
     }),
    
      power: '',
      sidekick: ''


   })
}
