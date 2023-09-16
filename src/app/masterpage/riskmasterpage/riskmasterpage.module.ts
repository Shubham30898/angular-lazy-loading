import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskmasterpageRoutingModule } from './riskmasterpage-routing.module';
import { RiskmasterpageComponent } from './riskmasterpage.component';


@NgModule({
  declarations: [
    RiskmasterpageComponent
  ],
  imports: [
    CommonModule,
    RiskmasterpageRoutingModule
  ],
  exports: [
    RiskmasterpageComponent
  ]
})
export class RiskmasterpageModule { }
