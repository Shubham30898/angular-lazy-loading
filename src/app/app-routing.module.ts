import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RiskmasterpageComponent } from './masterpage/riskmasterpage/riskmasterpage.component';
import { StrategyComponent } from './strategy/strategy.component';
import { RiskevaluationComponent } from './riskevaluation/riskevaluation.component';
import { StrategyriskmpComponent } from './masterpage/strategyriskmp/strategyriskmp.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '',
    component: RiskmasterpageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'strategy',
        component: StrategyComponent
      }
    ]
  },
  {
    path: 'strategyriskmp',
    component: StrategyriskmpComponent,
    children: [
      {
        path: 'riskevaluation',
        component: RiskevaluationComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}