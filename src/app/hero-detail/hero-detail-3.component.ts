import { Component, OnInit } from '@angular/core';
import {FormBuilder ,Validators} from '@angular/forms'

@Component({
  selector: 'app-hero-detail-3',
  templateUrl: './hero-detail-3.component.html',
  styleUrls: ['./hero-detail-3.component.css']
})
export class HeroDetail3Component implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  
   heroForm=this.fb.group({
     name:['',Validators.required]
   })
}
