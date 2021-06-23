import {MarcaDto} from './marca-dto';
import {ModeloDto} from './modelo-dto';
import {CategoriaDto} from './categoria-dto';
import {GrupoDto} from './grupo-dto';
import {FilialDto} from './filial-dto';

export class VeiculoDto {
  id: number;
  marca: MarcaDto;
  modelo: ModeloDto;
  categoria: CategoriaDto;
  grupo: GrupoDto;
  filial: FilialDto;
  motor: string;
  cambio: string;
  qtdPortas: number;
  capacidade: number;
  cor: string;
  vidroEletrico: boolean;
  arCondicionado: boolean;
  tipoDirecao: string;
  situacao: string;
  dtSituacao: Date;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, marca: MarcaDto, modelo: ModeloDto, categoria: CategoriaDto, grupo: GrupoDto, filial: FilialDto, motor: string, cambio: string, qtdPortas: number, capacidade: number, cor: string, vidroEletrico: boolean, arCondicionado: boolean, tipoDirecao: string, situacao: string, dtSituacao: Date ) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.categoria = categoria;
    this.grupo = grupo;
    this.filial = filial;
    this.motor = motor;
    this.cambio = cambio;
    this.qtdPortas = qtdPortas;
    this.capacidade = capacidade;
    this.cor = cor;
    this.vidroEletrico = vidroEletrico;
    this.arCondicionado = arCondicionado;
    this.tipoDirecao = tipoDirecao;
    this.situacao = situacao;
    this.dtSituacao = dtSituacao;
  }

}
