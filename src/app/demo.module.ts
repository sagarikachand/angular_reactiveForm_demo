import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import {ReactiveFormsModule} from '@angular/forms'
import { HeroDetail1Component } from './hero-detail/hero-detail-1.component';
import { HeroDetail2Component } from './hero-detail/hero-detail-2.component';
import { HeroDetail3Component } from './hero-detail/hero-detail-3.component';
import { HeroDetail4Component } from './hero-detail/hero-detail-4.component';
import { HeroDetail5Component } from './hero-detail/hero-detail-5.component';
import { HeroDetail6Component } from './hero-detail/hero-detail-6.component';
import { HerosService } from './heros.service';
import { AppModule } from './app.module';
import { HeroDetail7Component } from './hero-detail/hero-detail-7.component';
import { HeroDetail8Component } from './hero-detail/hero-detail-8.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppModule
  ],
  declarations: [DemoComponent, HeroDetail1Component, HeroDetail2Component, HeroDetail3Component, 
    HeroDetail4Component, HeroDetail5Component, HeroDetail6Component, HeroDetail7Component, HeroDetail8Component],
  bootstrap:[DemoComponent],

})
export class DemoModule { }
