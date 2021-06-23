import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../categoria/categoria.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {CategoriaDto} from '../../../model/categoria-dto';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nome'];

  categoria: CategoriaDto = {
    id: 0,
    nome: 'Categoria 1',
  };

  categorias: CategoriaDto[];

  dataSource;

  ngOnInit(): void {
    this.categoriaService.listAll().subscribe(dados => {
      this.categorias = dados;
      this.dataSource = this.categorias;
    });
  }

  save(): void {
    this.categoriaService.save(this.categoria).subscribe((dados) => {
      this.categoriaService.showMessage('Categoria Salvo com sucesso!', false);
      this.categorias.push(dados);
      this.dataSource = this.categorias;
      location.reload();
    });
  }
  edit(categoria: CategoriaDto): void {
    this.router.navigate(['/categoria-detalhe', categoria.id]);
  }

  delete(categoria: CategoriaDto): void {
    this.categoriaService.destroy(categoria.id);
  }
}
