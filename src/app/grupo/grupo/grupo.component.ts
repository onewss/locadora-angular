import { Component, OnInit } from '@angular/core';
import {GrupoService} from '../../grupo/grupo.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {GrupoDto} from '../../../model/grupo-dto';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  constructor(
    private grupoService: GrupoService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nome'];

  grupo: GrupoDto = {
    id: 0,
    nome: 'Grupo 1',
  };

  grupos: GrupoDto[];

  dataSource;

  ngOnInit(): void {
    this.grupoService.listAll().subscribe(dados => {
      this.grupos = dados;
      this.dataSource = this.grupos;
    });
  }

  save(): void {
    this.grupoService.save(this.grupo).subscribe((dados) => {
      this.grupoService.showMessage('Grupo Salvo com sucesso!', false);
      this.grupos.push(dados);
      this.dataSource = this.grupos;
      location.reload();
    });
  }
  edit(grupo: GrupoDto): void {
    this.router.navigate(['/grupo-detalhe', grupo.id]);
  }

  delete(grupo: GrupoDto): void {
    this.grupoService.destroy(grupo.id);
  }
}
