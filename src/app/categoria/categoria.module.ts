import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriaComponent} from './categoria/categoria.component';
import {CategoriaDetalheComponent} from './categoria-detalhe/categoria-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {NgxMaskModule} from 'ngx-mask';
import {CategoriaRoutingModule} from './categoria-routing.module';



@NgModule({
  declarations: [
    CategoriaComponent,
    CategoriaDetalheComponent
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
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
