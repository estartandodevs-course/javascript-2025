"use strict";
// Tópico 1: Tipagem Básica
// --- Tipos Primitivos ---
let nome = "João";
let idade = 28;
let eEstudante = true;
console.log(`Nome: ${nome}, Idade: ${idade}, Estudante: ${eEstudante}`);
// Tente fazer isso (vai dar erro na compilação!):
// idade = "vinte e oito"; // Erro: Type 'string' is not assignable to type 'number'.
// --- Arrays ---
// Podemos tipar arrays de duas formas:
let numeros = [1, 2, 3, 4, 5];
let nomes = ["Ana", "Carlos", "Beatriz"];
let endereco = ["Rua Principal", 123, "Centro"];
// --- Any ---
// O tipo 'any' é uma porta de escape. A variável pode ter qualquer tipo.
// Use com muita moderação, pois você perde a segurança do TypeScript.
let qualquerCoisa = "Isso é uma string";
qualquerCoisa = 10;
qualquerCoisa = false;
// --- Void ---
// Usado principalmente para tipar funções que não retornam nada.
function exibirMensagem() {
  console.log("Olá, TypeScript!");
}
exibirMensagem();
// Tópico 2: Funções com Tipos
// Podemos (e devemos!) tipar os parâmetros e o valor de retorno de uma função.
// --- Funções com Parâmetros e Retorno Tipados ---
function somar(a, b) {
  return a + b;
}
console.log(`A soma de 10 e 5 é: ${somar(10, 5)}`);
// Tente chamar: somar("10", 5) // O TS vai acusar o erro!
// --- Funções com Parâmetros Opcionais e Padrão ---
function saudacao(nome, saudacao) {
  // O '?' torna o parâmetro 'saudacao' opcional.
  if (saudacao) {
    return `${saudacao}, ${nome}!`;
  }
  return `Olá, ${nome}!`;
}
console.log(saudacao("Maria")); // Saída: Olá, Maria!
console.log(saudacao("José", "Bom dia")); // Saída: Bom dia, José!
const usuario = {
  id: 1,
  nome: "Alice",
  email: "alice@exemplo.com",
};
// usuario.id = 2; // Erro: Cannot assign to 'id' because it is a read-only property.
function exibirDetalhesUsuario(usuario) {
  console.log(
    `ID: ${usuario.id}, Nome: ${usuario.nome}, Email: ${usuario.email}`
  );
}
exibirDetalhesUsuario(usuario);
// Tópico 4: Union Types e Type Aliases
// Union Types (|): Permitem que uma variável aceite mais de um tipo.
// Type Aliases (type): Permitem criar um "apelido" para um tipo, simplificando tipos complexos.
// --- Union Type ---
// A variável 'id' pode ser tanto um número quanto uma string.
let idProduto;
idProduto = 101; // Válido
idProduto = "PROD-101"; // Válido
let statusAtual = "EmProcessamento";
function verificarStatus(status) {
  console.log(`O status do pedido é: ${status}`);
}
verificarStatus("Enviado");
// verificarStatus("Cancelado"); // Erro: Argument of type '"Cancelado"' is not assignable to parameter of type 'StatusPedido'.
// Tópico 5: Generics (Um Vislumbre do Avançado)
// Generics são como "variáveis de tipo". Eles permitem criar componentes, funções ou classes que podem trabalhar com diferentes tipos de dados, mantendo a segurança de tipo.
// Esta função aceita um array de QUALQUER tipo e retorna o primeiro elemento
// desse mesmo tipo. O <T> é o nosso "Generic Type".
function obterPrimeiroElemento(arr) {
  return arr.length > 0 ? arr[0] : undefined;
}
const primeiroNumero = obterPrimeiroElemento([10, 20, 30]); // O TS infere que T é 'number'
const primeiroNome = obterPrimeiroElemento(["Zoe", "Marcos", "Leo"]); // O TS infere que T é 'string'
console.log(`Primeiro número: ${primeiroNumero}`);
console.log(`Primeiro nome: ${primeiroNome}`);
// =============================================
// Aula: Orientação a Objetos em JavaScript (OOP)
// =============================================
// O que é Orientação a Objetos (OOP)?
// ---------------------------------------------
// É um paradigma de programação que organiza o código em torno de OBJETOS.
// Objetos possuem:
//   - Propriedades (atributos -> dados)
//   - Métodos (funções -> comportamentos)
// =============================================
// 1. Criando objetos de forma literal
// =============================================
const cachorro = {
  nome: "Rex",
  raca: "Labrador",
  latir: function () {
    console.log(`${this.nome} está latindo!`);
  },
};
console.log("Objeto literal:", cachorro);
cachorro.latir();
class Carro {
  marca;
  modelo;
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  ligar() {
    console.log(`O carro ${this.marca} ${this.modelo} está ligado!`);
  }
}
const carro1 = new Carro("Toyota", "Corolla");
carro1.ligar();
// =============================================
// 3. Herança (extends)
// =============================================
// Uma classe pode HERDAR atributos e métodos de outra.
class Animal {
  nome;
  constructor(nome) {
    this.nome = nome;
  }
  emitirSom() {
    console.log(`${this.nome} está fazendo um som...`);
  }
}
class Gato extends Animal {
  cor;
  constructor(nome, cor) {
    super(nome); // chama o construtor da classe pai
    this.cor = cor;
  }
  emitirSom() {
    console.log(`${this.nome} está miando!`);
  }
}
const gato1 = new Gato("Mimi", "Branca");
gato1.emitirSom();
// =============================================
// 4. Encapsulamento (private fields)
// =============================================
// Propriedades privadas (#) só podem ser acessadas dentro da classe.
class ContaBancaria {
  #saldo; // propriedade privada
  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }
  depositar(valor) {
    this.#saldo += valor;
    console.log(`Depósito de R$${valor}. Saldo atual: R$${this.#saldo}`);
  }
  sacar(valor) {
    if (valor > this.#saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor}. Saldo atual: R$${this.#saldo}`);
    }
  }
  verSaldo() {
    console.log(`Saldo atual: R$${this.#saldo}`);
  }
}
const conta = new ContaBancaria(100);
conta.depositar(50);
conta.sacar(30);
conta.verSaldo();
// console.log(conta.#saldo); // ❌ ERRO! Não pode acessar diretamente
// =============================================
// 5. Polimorfismo
// =============================================
// Objetos diferentes podem compartilhar o mesmo método, mas implementado de forma diferente.
class Forma {
  area() {
    return 0;
  }
}
class Quadrado extends Forma {
  lado;
  constructor(lado) {
    super();
    this.lado = lado;
  }
  area() {
    return this.lado * this.lado;
  }
}
class Circulo extends Forma {
  raio;
  constructor(raio) {
    super();
    this.raio = raio;
  }
  area() {
    return Math.PI * this.raio * this.raio;
  }
}
const formas = [new Quadrado(4), new Circulo(3)];
formas.forEach((forma) => console.log("Área:", forma.area()));
