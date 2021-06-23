export class FilialDto {
  id: number;
  nome: string;
  UF: string;
  municipio: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  // tslint:disable-next-line:max-line-length
  constructor(id: number, nome: string, UF: string, municipio: string, cep: string, logradouro: string, numero: string, complemento: string) {
    this.id = id;
    this.nome = nome;
    this.UF = UF;
    this.municipio = municipio;
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
  }
}
