import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guards/auth.guard';
import {GrupoComponent} from './grupo/grupo.component';
import {GrupoDetalheComponent} from './grupo-detalhe/grupo-detalhe.component';



const grupoRoutes: Routes = [
  {path: 'grupo', component: GrupoComponent, canActivate: [AuthGuard]},
  {path: 'grupo-detalhe', component: GrupoDetalheComponent, canActivate: [AuthGuard]},
  {path: 'grupo-detalhe/:id', component: GrupoDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(grupoRoutes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
