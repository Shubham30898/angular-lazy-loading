import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyRoutingModule } from './strategy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StrategyComponent } from './strategy.component';
import { StrategyCard1Module } from './cards/strategy-card1/strategy-card1.module';
import { StrategyCard2Module } from './cards/strategy-card2/strategy-card2.module';
import { StrategyCard3Module } from './cards/strategy-card3/strategy-card3.module';
import { StrategyCard4Module } from './cards/strategy-card4/strategy-card4.module';
import { StrategyCard5Module } from './cards/strategy-card5/strategy-card5.module';
import { StrategyCard6Module } from './cards/strategy-card6/strategy-card6.module';
import { StrategyCard7Module } from './cards/strategy-card7/strategy-card7.module';


@NgModule({
  declarations: [
    StrategyComponent
  ],
  imports: [
    CommonModule,
    StrategyRoutingModule,
    SharedModule,
    StrategyCard1Module,
    StrategyCard2Module,
    StrategyCard3Module,
    StrategyCard4Module,
    StrategyCard5Module,
    StrategyCard6Module,
    StrategyCard7Module,
  ],
  exports : [
    StrategyComponent
  ]
})
export class StrategyModule { }
