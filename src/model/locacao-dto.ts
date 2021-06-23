import {PlanoDto} from './plano-dto';
import {VeiculoDto} from './veiculo-dto';
import {ClienteDto} from './cliente-dto';

export class LocacaoDto {
  id: number;
  dtHrInicioReserva: Date;
  dtHrFimReserva: Date;
  dtHrInicioRetirada: Date;
  dtHrFimRetirada: Date;
  plano: PlanoDto;
  veiculo: VeiculoDto;
  cliente: ClienteDto;
  desconto: number;
  valorTotal: number;
  valorFinal: number;

}
