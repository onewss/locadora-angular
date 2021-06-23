import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VeiculoComponent} from './veiculo/veiculo.component';
import {VeiculoDetalheComponent} from './veiculo-detalhe/veiculo-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {NgxMaskModule} from 'ngx-mask';
import {VeiculoRoutingModule} from './veiculo-routing.module';



@NgModule({
  declarations: [
    VeiculoComponent,
    VeiculoDetalheComponent
  ],
  exports: [
    VeiculoComponent,
    VeiculoDetalheComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    NgxMaskModule,
    VeiculoRoutingModule
  ]
})
export class VeiculoModule { }
