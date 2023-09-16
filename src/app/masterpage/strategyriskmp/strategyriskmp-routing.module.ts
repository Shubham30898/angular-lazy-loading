import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiskevaluationComponent } from 'src/app/riskevaluation/riskevaluation.component';

const routes: Routes = [
  {
    path: 'riskevaluation',
    component: RiskevaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategyriskmpRoutingModule { }
