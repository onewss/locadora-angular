import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanoComponent} from './plano/plano.component';
import {PlanoDetalheComponent} from './plano-detalhe/plano-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {NgxMaskModule} from 'ngx-mask';
import {PlanoRoutingModule} from './plano-routing.module';



@NgModule({
  declarations: [
    PlanoComponent,
    PlanoDetalheComponent
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
    PlanoRoutingModule
  ]
})
export class PlanoModule { }
