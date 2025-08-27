// =============================================
// Aula: Objetos em JavaScript
// =============================================

// Um objeto é uma coleção de pares chave-valor.
// Ele pode armazenar dados e comportamentos relacionados.

const pessoa = {
  nome: "Maria",
  idade: 28,
  profissao: "Desenvolvedora",
};

// const { nome, idade } = pessoa; desestruturação
// console.log("Objeto inicial:", nome, idade);

// -------------------------------------------------
// Acessando propriedades do objeto
// -------------------------------------------------
// console.log("Nome:", pessoa.nome); // Acessando com ponto
// console.log("Idade:", pessoa["idade"]); // Acessando com colchetes

// -------------------------------------------------
// Manipular objetos
// -------------------------------------------------
pessoa.idade = 29; // Alterando valor existente
pessoa.cidade = "São Paulo"; // Adicionando nova propriedade
pessoa.sobreNome = "Nunes";
// console.log("Objeto após manipulação:", pessoa);

// -------------------------------------------------
// Object.keys -> retorna todas as CHAVES do objeto
// -------------------------------------------------
// const chaves = Object.keys(pessoa);
// console.log("Chaves do objeto:", chaves);

// -------------------------------------------------
// Object.values -> retorna todos os VALORES do objeto
// -------------------------------------------------
// const valores = Object.values(pessoa);
// console.log("Valores do objeto:", valores);

// -------------------------------------------------
// Object.entries -> retorna pares [chave, valor]
// -------------------------------------------------
// const entradas = Object.entries(pessoa);
// console.log("Entradas (pares chave-valor):", entradas);

// -------------------------------------------------
// Adicionar propriedades dinamicamente
// -------------------------------------------------
// pessoa.email = "maria@exemplo.com";
// console.log("Objeto com nova propriedade (email):", pessoa);

// -------------------------------------------------
// Exemplo prático: função construtora com objeto
// -------------------------------------------------
// function Carro(marca, modelo) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.ligar = function () {
//     return this.marca;
//   };
// }

// const carro1 = new Carro("Toyota", "Corolla");
// const carro2 = new Carro("Fiat", "Uno");
// carro1.ligar();
// console.log(carro2.ligar());

// -------------------------------------------------
// Funções Construtoras vs Classes
// -------------------------------------------------

// Função Construtora (forma antiga)
// function PessoaConstrutora(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;

//   this.apresentar = function () {
//     console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//   };
// }

// const p1 = new PessoaConstrutora("Ana", 28);
// p1.apresentar(); // Olá, meu nome é Ana e tenho 28 anos.

// Classe (forma moderna ES6)

// class PessoaClasse {
//   nome;
//   idade;
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   apresentar() {
//     console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//   }
// }

// const p2 = new PessoaClasse();
// p2.apresentar(); // Olá, meu nome é Carlos e tenho 35 anos.

// -------------------------------------------------
// - Função Construtora: jeito antigo de criar "molde" de objetos, usando 'new'.
// - Classe: sintaxe moderna, mais clara e organizada, mas funciona internamente como função construtora.
// -------------------------------------------------
