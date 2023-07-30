export class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  saudacao() {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
  }
}
