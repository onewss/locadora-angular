import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrupoComponent} from './grupo/grupo.component';
import {GrupoDetalheComponent} from './grupo-detalhe/grupo-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {NgxMaskModule} from 'ngx-mask';
import {GrupoRoutingModule} from './grupo-routing.module';



@NgModule({
  declarations: [
    GrupoComponent,
    GrupoDetalheComponent
  ],
  exports: [
    GrupoComponent,
    GrupoDetalheComponent
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
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
