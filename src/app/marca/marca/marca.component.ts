import { Component, OnInit } from '@angular/core';
import {MarcaService} from '../../marca/marca.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MarcaDto} from '../../../model/marca-dto';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  constructor(
    private marcaService: MarcaService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nome'];

  marca: MarcaDto = {
    id: 0,
    nome: 'Marca 1',
  };

  marcas: MarcaDto[];

  dataSource;

  ngOnInit(): void {
    this.marcaService.listAll().subscribe(dados => {
      this.marcas = dados;
      this.dataSource = this.marcas;
    });
  }

  save(): void {
    this.marcaService.save(this.marca).subscribe((dados) => {
      this.marcaService.showMessage('Marca Salvo com sucesso!', false);
      this.marcas.push(dados);
      this.dataSource = this.marcas;
      location.reload();
    });
  }
  edit(marca: MarcaDto): void {
    this.router.navigate(['/marca-detalhe', marca.id]);
  }

  delete(marca: MarcaDto): void {
    this.marcaService.destroy(marca.id);
  }
}
