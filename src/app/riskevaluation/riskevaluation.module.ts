import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskevaluationRoutingModule } from './riskevaluation-routing.module';
import { RiskevaluationComponent } from './riskevaluation.component';
import { RiskevaluationCard1Module } from './cards/riskevaluation-card1/riskevaluation-card1.module';
import { RiskevaluationCard2Module } from './cards/riskevaluation-card2/riskevaluation-card2.module';
import { RiskevaluationCard3Module } from './cards/riskevaluation-card3/riskevaluation-card3.module';
import { RiskevaluationCard4Module } from './cards/riskevaluation-card4/riskevaluation-card4.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RiskevaluationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RiskevaluationRoutingModule,
    RiskevaluationCard1Module,
    RiskevaluationCard2Module,
    RiskevaluationCard3Module,
    RiskevaluationCard4Module,    
  ],
  exports: [
    RiskevaluationComponent
  ]
})
export class RiskevaluationModule { }
