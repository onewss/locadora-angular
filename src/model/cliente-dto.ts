export class ClienteDto {
  id: number;
  nome: string;
  cpf: string;
  primeiroNome: string;
  dataNascimento: Date;
  versao: number;
  constructor(id: number, nome: string, cpf: string, primeiroNome: string, dataNascimento: Date, versao: number) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.primeiroNome = primeiroNome;
    this.dataNascimento = dataNascimento;
    this.versao = versao;
  }
}
