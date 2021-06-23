import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanoComponent} from './plano/plano.component';
import {PlanoDetalheComponent} from './plano-detalhe/plano-detalhe.component';
import {AuthGuard} from '../guards/auth.guard';

const planoRoutes: Routes = [
  {path: 'plano', component: PlanoComponent, canActivate: [AuthGuard]},
  {path: 'plano-detalhe', component: PlanoDetalheComponent, canActivate: [AuthGuard]},
  {path: 'plano-detalhe/:id', component: PlanoDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(planoRoutes)],
  exports: [RouterModule]
})
export class PlanoRoutingModule { }
