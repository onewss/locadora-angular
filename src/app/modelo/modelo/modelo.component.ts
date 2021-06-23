import { Component, OnInit } from '@angular/core';
import {ModeloService} from '../../modelo/modelo.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {ModeloDto} from '../../../model/modelo-dto';
import {MarcaDto} from '../../../model/marca-dto';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {

  constructor(
    private modeloService: ModeloService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nome'];

  modelo: ModeloDto = {
    id: 0,
    marca: new MarcaDto(1, 'Marca 1'),
    nome: 'Modelo 1',
  };

  modelos: ModeloDto[];

  dataSource;

  ngOnInit(): void {
    this.modeloService.listAll().subscribe(dados => {
      this.modelos = dados;
      this.dataSource = this.modelos;
    });
  }

  save(): void {
    this.modeloService.save(this.modelo).subscribe((dados) => {
      this.modeloService.showMessage('Modelo Salvo com sucesso!', false);
      this.modelos.push(dados);
      this.dataSource = this.modelos;
      location.reload();
    });
  }
  edit(modelo: ModeloDto): void {
    this.router.navigate(['/modelo-detalhe', modelo.id]);
  }

  delete(modelo: ModeloDto): void {
    this.modeloService.destroy(modelo.id);
  }
}
