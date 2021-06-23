import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guards/auth.guard';
import {ModeloComponent} from './modelo/modelo.component';
import {ModeloDetalheComponent} from './modelo-detalhe/modelo-detalhe.component';

const modeloRoutes: Routes = [
  {path: 'modelo', component: ModeloComponent, canActivate: [AuthGuard]},
  {path: 'modelo-detalhe', component: ModeloDetalheComponent, canActivate: [AuthGuard]},
  {path: 'modelo-detalhe/:id', component: ModeloDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(modeloRoutes)],
  exports: [RouterModule]
})
export class ModeloRoutingModule { }
