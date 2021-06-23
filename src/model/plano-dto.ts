import {GrupoDto} from './grupo-dto';

export class PlanoDto {
  id: number;
  nome: string;
  descricao: string;
  grupo: GrupoDto;
  valor: number;

  constructor(id: number, nome: string, descricao: string, grupo: GrupoDto, valor: number) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.grupo = grupo;
    this.valor = valor;
  }
}
