import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModeloComponent} from './modelo/modelo.component';
import {ModeloDetalheComponent} from './modelo-detalhe/modelo-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {NgxMaskModule} from 'ngx-mask';
import {ModeloRoutingModule} from './modelo-routing.module';



@NgModule({
  declarations: [
    ModeloComponent,
    ModeloDetalheComponent
  ],
  exports: [
    ModeloComponent,
    ModeloDetalheComponent
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
    ModeloRoutingModule
  ]
})
export class ModeloModule { }
