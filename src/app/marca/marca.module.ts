import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarcaComponent} from './marca/marca.component';
import {MarcaDetalheComponent} from './marca-detalhe/marca-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {NgxMaskModule} from 'ngx-mask';
import {MarcaRoutingModule} from './marca-routing.module';



@NgModule({
  declarations: [
    MarcaComponent,
    MarcaDetalheComponent
  ],
  exports: [
    MarcaComponent,
    MarcaDetalheComponent
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
    MarcaRoutingModule
  ]
})
export class MarcaModule { }
