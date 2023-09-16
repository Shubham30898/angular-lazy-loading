import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'error',
    loadChildren: ()=> import('./error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '',
    loadChildren: ()=> import('./masterpage/riskmasterpage/riskmasterpage.module').then(m => m.RiskmasterpageModule)
  },
  {
    path: 'strategyriskmp',
    loadChildren: ()=> import('./masterpage/strategyriskmp/strategyriskmp.module').then(m => m.StrategyriskmpModule)
  },
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