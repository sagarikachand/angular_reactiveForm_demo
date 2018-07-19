import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms"

@Component({
  selector: 'app-hero-detail-1',
  templateUrl: './hero-detail-1.component.html',
  styleUrls: ['./hero-detail-1.component.css']
})
export class HeroDetail1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name= new FormControl();  



}
