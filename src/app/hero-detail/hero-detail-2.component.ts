import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormControlName} from '@angular/forms';

@Component({
  selector: 'app-hero-detail-2',
  templateUrl: './hero-detail-2.component.html',
  styleUrls: ['./hero-detail-2.component.css']
})
export class HeroDetail2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  heroForm= new FormGroup({
    name : new FormControl()
  })
}
