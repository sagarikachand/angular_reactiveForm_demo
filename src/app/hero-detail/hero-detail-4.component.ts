import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {states} from '../data-model'

@Component({
  selector: 'app-hero-detail-4',
  templateUrl: './hero-detail-4.component.html',
  styleUrls: ['./hero-detail-4.component.css']
})
export class HeroDetail4Component implements OnInit {

  constructor(private fb :FormBuilder) { }

  ngOnInit() {
  }

states=states;
  
   heroForm= this.fb.group({  
     name:['',Validators.required],
     street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''


   })
}
