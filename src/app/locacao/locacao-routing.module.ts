import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocacaoComponent} from './locacao/locacao.component';
import {LocacaoDetalheComponent} from './locacao-detalhe/locacao-detalhe.component';
import {AuthGuard} from '../guards/auth.guard';


const veiculoRoutes: Routes = [
  {path: 'locacao', component: LocacaoComponent, canActivate: [AuthGuard]},
  {path: 'locacao-detalhe', component: LocacaoDetalheComponent, canActivate: [AuthGuard]},
  {path: 'locacao-detalhe/:id', component: LocacaoDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(veiculoRoutes)],
  exports: [RouterModule]
})
export class LocacaoRoutingModule { }
