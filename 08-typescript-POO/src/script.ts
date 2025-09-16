// Tópico 1: Tipagem Básica

// --- Tipos Primitivos ---
let nome: string = "João";
let idade: number = 28;
let eEstudante: boolean = true;

console.log(`Nome: ${nome}, Idade: ${idade}, Estudante: ${eEstudante}`);

// Tente fazer isso (vai dar erro na compilação!):
// idade = "vinte e oito"; // Erro: Type 'string' is not assignable to type 'number'.

// --- Arrays ---
// Podemos tipar arrays de duas formas:
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: Array<string> = ["Ana", "Carlos", "Beatriz"];

let endereco: [string, number, string] = ["Rua Principal", 123, "Centro"];

// --- Any ---
// O tipo 'any' é uma porta de escape. A variável pode ter qualquer tipo.
// Use com muita moderação, pois você perde a segurança do TypeScript.
let qualquerCoisa: any = "Isso é uma string";
qualquerCoisa = 10;
qualquerCoisa = false;

// --- Void ---
// Usado principalmente para tipar funções que não retornam nada.
function exibirMensagem(): void {
  console.log("Olá, TypeScript!");
}

exibirMensagem();

// Tópico 2: Funções com Tipos
// Podemos (e devemos!) tipar os parâmetros e o valor de retorno de uma função.

// --- Funções com Parâmetros e Retorno Tipados ---
function somar(a: number, b: number): number {
  return a + b;
}

console.log(`A soma de 10 e 5 é: ${somar(10, 5)}`);
// Tente chamar: somar("10", 5) // O TS vai acusar o erro!

// --- Funções com Parâmetros Opcionais e Padrão ---
function saudacao(nome: string, saudacao?: string): string {
  // O '?' torna o parâmetro 'saudacao' opcional.
  if (saudacao) {
    return `${saudacao}, ${nome}!`;
  }
  return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // Saída: Olá, Maria!
console.log(saudacao("José", "Bom dia")); // Saída: Bom dia, José!

// Tópico 3: Interfaces (Estruturando Objetos)
// Uma interface é como um "contrato" ou um "molde" para a estrutura de um objeto. Ela garante que um objeto tenha as propriedades que esperamos, com os tipos corretos.

interface Usuario {
  readonly id: number; // 'readonly' impede que a propriedade seja alterada
  nome: string;
  email: string;
  telefone?: string; // '?' torna a propriedade opcional
}

const usuario: Usuario = {
  id: 1,
  nome: "Alice",
  email: "alice@exemplo.com",
};

// usuario.id = 2; // Erro: Cannot assign to 'id' because it is a read-only property.

function exibirDetalhesUsuario(usuario: Usuario): void {
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
let idProduto: number | string;
idProduto = 101; // Válido
idProduto = "PROD-101"; // Válido

// --- Type Alias ---
// Criando um tipo personalizado para status, limitando as opções.
type StatusPedido = "Aguardando" | "EmProcessamento" | "Enviado" | "Entregue";

let statusAtual: StatusPedido = "EmProcessamento";

function verificarStatus(status: StatusPedido): void {
  console.log(`O status do pedido é: ${status}`);
}

verificarStatus("Enviado");
// verificarStatus("Cancelado"); // Erro: Argument of type '"Cancelado"' is not assignable to parameter of type 'StatusPedido'.

// Tópico 5: Generics (Um Vislumbre do Avançado)
// Generics são como "variáveis de tipo". Eles permitem criar componentes, funções ou classes que podem trabalhar com diferentes tipos de dados, mantendo a segurança de tipo.

// Esta função aceita um array de QUALQUER tipo e retorna o primeiro elemento
// desse mesmo tipo. O <T> é o nosso "Generic Type".
function obterPrimeiroElemento<T>(arr: T[]): T | undefined {
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

// =============================================
// 2. Classes (syntactic sugar das funções construtoras)
// =============================================
// Classes foram introduzidas no ES6 e deixam o código mais legível.
// Interface define um CONTRATO que as classes devem seguir.
interface IVeiculo {
  marca: string;
  modelo: string;
  ligar(): void;
}

class Carro implements IVeiculo {
  marca: string;
  modelo: string;
  constructor(marca: string, modelo: string) {
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
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom() {
    console.log(`${this.nome} está fazendo um som...`);
  }
}

class Gato extends Animal {
  cor: string;
  constructor(nome: string, cor: string) {
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

  constructor(saldoInicial: number) {
    this.#saldo = saldoInicial;
  }

  depositar(valor: number) {
    this.#saldo += valor;
    console.log(`Depósito de R$${valor}. Saldo atual: R$${this.#saldo}`);
  }

  sacar(valor: number) {
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
  lado: number;
  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  area() {
    return this.lado * this.lado;
  }
}

class Circulo extends Forma {
  raio: number;
  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  area() {
    return Math.PI * this.raio * this.raio;
  }
}

const formas = [new Quadrado(4), new Circulo(3)];
formas.forEach((forma) => console.log("Área:", forma.area()));
