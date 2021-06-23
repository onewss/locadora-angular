import { Component, OnInit } from '@angular/core';
import {PlanoService} from '../../plano/plano.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {PlanoDto} from '../../../model/plano-dto';
import {GrupoDto} from '../../../model/grupo-dto';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.css']
})
export class PlanoComponent implements OnInit {

  constructor(
    private planoService: PlanoService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nome'];

  plano: PlanoDto = {
    id: 0,
    nome: 'Plano 1',
    descricao: 'Descrição Plano 1',
    grupo: new GrupoDto(1, 'Grupo 1'),
    valor: 1000
  };

  planos: PlanoDto[];

  dataSource;

  ngOnInit(): void {
    this.planoService.listAll().subscribe(dados => {
      this.planos = dados;
      this.dataSource = this.planos;
    });
  }

  save(): void {
    this.planoService.save(this.plano).subscribe((dados) => {
      this.planoService.showMessage('Plano Salvo com sucesso!', false);
      this.planos.push(dados);
      this.dataSource = this.planos;
      location.reload();
    });
  }
  edit(plano: PlanoDto): void {
    this.router.navigate(['/plano-detalhe', plano.id]);
  }

  delete(plano: PlanoDto): void {
    this.planoService.destroy(plano.id);
  }
}
