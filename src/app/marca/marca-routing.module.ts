import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guards/auth.guard';
import {MarcaComponent} from './marca/marca.component';
import {MarcaDetalheComponent} from './marca-detalhe/marca-detalhe.component';


const marcaRoutes: Routes = [
  {path: 'marca', component: MarcaComponent, canActivate: [AuthGuard]},
  {path: 'marca-detalhe', component: MarcaDetalheComponent, canActivate: [AuthGuard]},
  {path: 'marca-detalhe/:id', component: MarcaDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(marcaRoutes)],
  exports: [RouterModule]
})
export class MarcaRoutingModule { }
