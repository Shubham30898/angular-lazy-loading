import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeCard1Component } from './home/cards/home-card1/home-card1.component';
import { HomeCard2Component } from './home/cards/home-card2/home-card2.component';

import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HomeCard1Component,
        HomeCard2Component,
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
