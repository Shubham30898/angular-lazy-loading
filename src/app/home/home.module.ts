import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeCard1Module } from './cards/home-card1/home-card1.module';
import { HomeCard2Module } from './cards/home-card2/home-card2.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeCard1Module,
    HomeCard2Module,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
