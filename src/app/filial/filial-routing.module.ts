import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guards/auth.guard';
import {FilialComponent} from './filial/filial.component';
import {FilialDetalheComponent} from './filial-detalhe/filial-detalhe.component';




const filialRoutes: Routes = [
  {path: 'filial', component: FilialComponent, canActivate: [AuthGuard]},
  {path: 'filial-detalhe', component: FilialDetalheComponent, canActivate: [AuthGuard]},
  {path: 'filial-detalhe/:id', component: FilialDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(filialRoutes)],
  exports: [RouterModule]
})
export class FilialRoutingModule { }
