// ===========================================
// Aula 2 - JavaScript
// Tópicos:
//  - Lógica de programação e algoritmos
//  - Template literals
//  - Arrays
//  - Estrutura de repetição for (com arrays)
// ===========================================

// -------------------------------
// Lógica de programação e algoritmos
// -------------------------------
// Lógica de programação é a maneira de organizar o pensamento
// para resolver problemas, transformando-os em passos bem definidos.
// Um algoritmo é uma sequência de passos (como uma receita de bolo).
//
// Exemplo: queremos fazer um programa que soma dois números.

let numero1 = 10;
let numero2 = 20;
let soma = numero1 + numero2;

console.log("O resultado da soma é:", soma);
// Esse é um algoritmo bem simples:
// 1 - Definimos os números
// 2 - Somamos
// 3 - Exibimos o resultado

// -------------------------------
// Template literals
// -------------------------------
// Template literals permitem interpolar variáveis dentro de strings.
// Usamos crase (`) em vez de aspas.

// let nome = "Maria"
// let idade = 25

// console.log("Com concatenação tradicional: " + nome + " tem " + idade + " anos.")
// console.log(`Com template literals: ${nome} tem ${idade} anos.`)

// Também podemos quebrar linhas facilmente:
// let mensagem = `Olá, ${nome}!
// Você tem ${idade} anos.
// Bem-vinda ao curso de JavaScript!`

// console.log(mensagem)

// -------------------------------
// Arrays
// -------------------------------
// Arrays são listas que armazenam vários valores.
// Exemplo: lista de frutas

// let frutas = ["maçã", "banana", "laranja", "uva"]

// console.log("Lista completa de frutas:", frutas)
// console.log("Primeira fruta:", frutas[0])  // índice começa em 0
// console.log("Última fruta:", frutas[frutas.length - 1])

// // Adicionando e removendo elementos
// frutas.push("abacaxi") // adiciona no final
// console.log("Após adicionar abacaxi:", frutas)

// frutas.pop() // remove o último
// console.log("Após remover o último:", frutas)

// -------------------------------
// Estrutura de repetição for (com arrays)
// -------------------------------
// O "for" é muito usado para percorrer arrays.
// Exemplo: exibir todas as frutas da lista

// for (let i = 0; i < frutas.length; i++) {
//   console.log(`Fruta ${i + 1}: ${frutas[i]}`)
// }

// // Outra forma mais moderna é o "for...of":
// for (let fruta of frutas) {
//   console.log("Fruta usando for...of:", fruta)
// }
