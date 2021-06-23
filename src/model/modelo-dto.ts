import {MarcaDto} from './marca-dto';

export class ModeloDto {
  id: number;
  marca: MarcaDto;
  nome: string;
  constructor(id: number, marca: MarcaDto, nome: string) {
    this.id = id;
    this.marca = marca;
    this.nome = nome;
  }
}
