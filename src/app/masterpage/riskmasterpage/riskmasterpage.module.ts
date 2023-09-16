import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskmasterpageRoutingModule } from './riskmasterpage-routing.module';
import { RiskmasterpageComponent } from './riskmasterpage.component';
import { HomeModule } from 'src/app/home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RiskmasterpageComponent
  ],
  imports: [
    CommonModule,
    RiskmasterpageRoutingModule,
    HomeModule,
    SharedModule
  ],
  exports: [
    RiskmasterpageComponent
  ]
})
export class RiskmasterpageModule { }
