import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyriskmpRoutingModule } from './strategyriskmp-routing.module';
import { StrategyriskmpComponent } from './strategyriskmp.component';
import { RiskevaluationModule } from 'src/app/riskevaluation/riskevaluation.module';


@NgModule({
  declarations: [
    StrategyriskmpComponent
  ],
  imports: [
    CommonModule,
    StrategyriskmpRoutingModule,
    RiskevaluationModule
  ]
})
export class StrategyriskmpModule { }
