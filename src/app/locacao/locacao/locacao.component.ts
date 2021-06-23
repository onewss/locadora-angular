import { Component, OnInit } from '@angular/core';
import {LocacaoService} from '../../locacao/locacao.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {LocacaoDto} from '../../../model/locacao-dto';
import {PlanoDto} from '../../../model/plano-dto';
import {VeiculoDto} from '../../../model/veiculo-dto';
import {ClienteDto} from '../../../model/cliente-dto';
import {GrupoDto} from '../../../model/grupo-dto';
import {MarcaDto} from '../../../model/marca-dto';
import {ModeloDto} from '../../../model/modelo-dto';
import {CategoriaDto} from '../../../model/categoria-dto';
import {FilialDto} from '../../../model/filial-dto';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})
export class LocacaoComponent implements OnInit {

  constructor(
    private locacaoService: LocacaoService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nomeCliente', 'modeloVeiculo', 'dtHrInicioReserva', 'valorFinal'];

  locacao: LocacaoDto = {
    id: 0,
    dtHrInicioReserva: new Date(),
    dtHrFimReserva: new Date(),
    dtHrInicioRetirada: new Date(),
    dtHrFimRetirada: new Date(),
    plano: new PlanoDto(1, 'plano1', 'descricao plano 1', new GrupoDto(1, 'grupo1'), 1000),
    veiculo: new VeiculoDto(
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
     ),
    cliente: new ClienteDto(1, 'Wesley A Ferreira', '73374369120', 'wesley', new Date(), 1),
    desconto: 0,
    valorTotal: 1000,
    valorFinal: 1000
  };

  locacoes: LocacaoDto[];

  dataSource;

  ngOnInit(): void {
    this.locacaoService.listAll().subscribe(dados => {
      this.locacoes = dados;
      this.dataSource = this.locacoes;
    });
  }

  save(): void {
    this.locacaoService.save(this.locacao).subscribe((dados) => {
      this.locacaoService.showMessage('Locacao Salvo com sucesso!', false);
      this.locacoes.push(dados);
      this.dataSource = this.locacoes;
      location.reload();
    });
  }
  edit(locacao: LocacaoDto): void {
    this.router.navigate(['/locacao-detalhe', locacao.id]);
  }

  delete(locacao: LocacaoDto): void {
    this.locacaoService.destroy(locacao.id);
  }
}
