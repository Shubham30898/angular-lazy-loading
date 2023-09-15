import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { HomeCard1Component } from './home/cards/home-card1/home-card1.component';
import { HomeCard2Component } from './home/cards/home-card2/home-card2.component';
import { RiskmasterpageComponent } from './masterpage/riskmasterpage/riskmasterpage.component';
import { StrategyriskmpComponent } from './masterpage/strategyriskmp/strategyriskmp.component';
import { RiskevaluationComponent } from './riskevaluation/riskevaluation.component';
import { RiskevaluationCard1Component } from './riskevaluation/cards/riskevaluation-card1/riskevaluation-card1.component';
import { RiskevaluationCard2Component } from './riskevaluation/cards/riskevaluation-card2/riskevaluation-card2.component';
import { RiskevaluationCard3Component } from './riskevaluation/cards/riskevaluation-card3/riskevaluation-card3.component';
import { RiskevaluationCard4Component } from './riskevaluation/cards/riskevaluation-card4/riskevaluation-card4.component';
import { StrategyComponent } from './strategy/strategy.component';
import { StrategyCard1Component } from './strategy/cards/strategy-card1/strategy-card1.component';
import { StrategyCard2Component } from './strategy/cards/strategy-card2/strategy-card2.component';
import { StrategyCard3Component } from './strategy/cards/strategy-card3/strategy-card3.component';
import { StrategyCard4Component } from './strategy/cards/strategy-card4/strategy-card4.component';
import { StrategyCard5Component } from './strategy/cards/strategy-card5/strategy-card5.component';
import { StrategyCard6Component } from './strategy/cards/strategy-card6/strategy-card6.component';
import { StrategyCard7Component } from './strategy/cards/strategy-card7/strategy-card7.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        HomeComponent,
        HomeCard1Component,
        HomeCard2Component,
        RiskmasterpageComponent,
        StrategyriskmpComponent,
        RiskevaluationComponent,
        RiskevaluationCard1Component,
        RiskevaluationCard2Component,
        RiskevaluationCard3Component,
        RiskevaluationCard4Component,
        StrategyComponent,
        StrategyCard1Component,
        StrategyCard2Component,
        StrategyCard3Component,
        StrategyCard4Component,
        StrategyCard5Component,
        StrategyCard6Component,
        StrategyCard7Component,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ]
})
export class AppModule { }
