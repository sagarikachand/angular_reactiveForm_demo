import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HerosService } from './heros.service';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent // <-- export HeroListComponent
  ],
  providers: [HerosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
