import { Component, OnInit } from '@angular/core';
import {VeiculoService} from '../../veiculo/veiculo.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {VeiculoDto} from '../../../model/veiculo-dto';
import {MarcaDto} from '../../../model/marca-dto';
import {ModeloDto} from '../../../model/modelo-dto';
import {CategoriaDto} from '../../../model/categoria-dto';
import {GrupoDto} from '../../../model/grupo-dto';
import {FilialDto} from '../../../model/filial-dto';
import {ClienteDto} from '../../../model/cliente-dto';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  constructor(
    private veiculoService: VeiculoService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'marca', 'modelo'];

  veiculo = new VeiculoDto(
  1,
  new MarcaDto(1, 'Marca 1'),
  new ModeloDto(1, new MarcaDto(1, 'Marca 1'), 'Modelo 1'),
  new CategoriaDto(1, 'categoria 1'),
  new GrupoDto(1, 'grupo1'),
  new FilialDto(1, 'filial 1', 'GO', 'Goiânia', '74580160', 'av Marginal Norte', '160', 'dpt TI'),
  '2.0',
  'Automático',
  4,
  5,
  'Branca',
  true,
  true,
  'Elétrica',
  'D',
  new Date()
);

  veiculos: VeiculoDto[];

  dataSource;

  ngOnInit(): void {
    this.veiculoService.listAll().subscribe(dados => {
      this.veiculos = dados;
      this.dataSource = this.veiculos;
    });
  }

  save(): void {
    this.veiculoService.save(this.veiculo).subscribe((dados) => {
      this.veiculoService.showMessage('Veiculo Salvo com sucesso!', false);
      this.veiculos.push(dados);
      this.dataSource = this.veiculos;
      location.reload();
    });
  }
  edit(veiculo: VeiculoDto): void {
    this.router.navigate(['/veiculo-detalhe', veiculo.id]);
  }

  delete(veiculo: VeiculoDto): void {
    this.veiculoService.destroy(veiculo.id);
  }
}
