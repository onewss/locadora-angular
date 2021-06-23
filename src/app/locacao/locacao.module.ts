import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocacaoComponent} from './locacao/locacao.component';
import {LocacaoDetalheComponent} from './locacao-detalhe/locacao-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {NgxMaskModule} from 'ngx-mask';
import {LocacaoRoutingModule} from './locacao-routing.module';



@NgModule({
  declarations: [
    LocacaoComponent,
    LocacaoDetalheComponent
  ],
  exports:[
    LocacaoComponent,
    LocacaoDetalheComponent
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
    LocacaoRoutingModule
  ]
})
export class LocacaoModule { }
