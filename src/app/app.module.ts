import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {ClienteModule} from './cliente/cliente.module';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ClienteRoutingModule} from './cliente/cliente-routing.module';
import {MatCardModule} from '@angular/material/card';
import {LoginModule} from './login/login.module';
import { VeiculoComponent } from './veiculo/veiculo/veiculo.component';
import { VeiculoDetalheComponent } from './veiculo/veiculo-detalhe/veiculo-detalhe.component';
import { LocacaoComponent } from './locacao/locacao/locacao.component';
import { LocacaoDetalheComponent } from './locacao/locacao-detalhe/locacao-detalhe.component';
import { FilialComponent } from './filial/filial/filial.component';
import { FilialDetalheComponent } from './filial/filial-detalhe/filial-detalhe.component';
import { GrupoComponent } from './grupo/grupo/grupo.component';
import { GrupoDetalheComponent } from './grupo/grupo-detalhe/grupo-detalhe.component';
import { MarcaComponent } from './marca/marca/marca.component';
import { MarcaDetalheComponent } from './marca/marca-detalhe/marca-detalhe.component';
import { ModeloComponent } from './modelo/modelo/modelo.component';
import { ModeloDetalheComponent } from './modelo/modelo-detalhe/modelo-detalhe.component';
import { PlanoComponent } from './plano/plano/plano.component';
import { PlanoDetalheComponent } from './plano/plano-detalhe/plano-detalhe.component';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { CategoriaDetalheComponent } from './categoria/categoria-detalhe/categoria-detalhe.component';
import {CategoriaModule} from './categoria/categoria.module';
import {FilialModule} from './filial/filial.module';
import {GrupoModule} from './grupo/grupo.module';
import {LocacaoModule} from './locacao/locacao.module';
import {MarcaModule} from './marca/marca.module';
import {ModeloModule} from './modelo/modelo.module';
import {PlanoModule} from './plano/plano.module';
import {VeiculoModule} from './veiculo/veiculo.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ClienteModule,
    CategoriaModule,
    FilialModule,
    GrupoModule,
    LocacaoModule,
    MarcaModule,
    ModeloModule,
    PlanoModule,
    VeiculoModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    ClienteRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
