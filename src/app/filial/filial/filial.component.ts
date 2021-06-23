import { Component, OnInit } from '@angular/core';
import {FilialService} from '../../filial/filial.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {FilialDto} from '../../../model/filial-dto';

@Component({
  selector: 'app-filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.css']
})
export class FilialComponent implements OnInit {

  constructor(
    private filialService: FilialService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'UF', 'municipio'];

  filial: FilialDto = {
    id: 0,
    nome: 'Filial 1',
    UF: 'GO',
    municipio: 'Goiânia',
    cep: '74560180',
    logradouro: 'Av Marechal Rondon',
    numero: '160',
    complemento: 'dpt TI'
  };

  filiais: FilialDto[];

  dataSource;

  ngOnInit(): void {
    this.filialService.listAll().subscribe(dados => {
      this.filiais = dados;
      this.dataSource = this.filiais;
    });
  }

  save(): void {
    this.filialService.save(this.filial).subscribe((dados) => {
      this.filialService.showMessage('Filial Salvo com sucesso!', false);
      this.filiais.push(dados);
      this.dataSource = this.filiais;
      location.reload();
    });
  }
  edit(filial: FilialDto): void {
    this.router.navigate(['/filial-detalhe', filial.id]);
  }

  delete(filial: FilialDto): void {
    this.filialService.destroy(filial.id);
  }
}
