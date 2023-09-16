import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyCard1Component } from '../strategy-card1/strategy-card1.component';
import { StrategyCard2Component } from './strategy-card2.component';



@NgModule({
  declarations: [
    StrategyCard2Component
  ],
  imports: [
    CommonModule
  ],
  exports : [
    StrategyCard2Component
  ]
})
export class StrategyCard2Module { }
