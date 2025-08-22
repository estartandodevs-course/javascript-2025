// =======================================================
// 1. O que é JavaScript e para que é utilizado
// =======================================================

// JavaScript é uma linguagem de programação interpretada e de tipagem dinâmica, usada principalmente para dar interatividade a páginas web.
// Hoje em dia, também é utilizado para:

// Frontend → adicionar lógica em páginas web.
// Backend → com Node.js.
// Aplicações Mobile/Desktop → frameworks como React Native, Electron.
// IoT e até Inteligência Artificial.

// JavaScript pode ser executado em dois ambientes principais:
// Navegadores Web: Cada navegador possui um motor JavaScript que interpreta e executa o código. Exemplo: V8 (Chrome e Node.js), SpiderMonkey (Firefox). Esses motores possuem componentes que analisam, compilam e otimizam o código.

// Servidores: Node.js é uma plataforma que permite a execução de JavaScript no servidor. Ele utiliza o motor V8 para executar o código JavaScript fora do navegador, permitindo a construção de aplicações web completas.

// console.log("Olá, JavaScript! 🚀");

// =======================================================
// 2. Variáveis
// =======================================================

// let nome = "Pedro";

// const anoNascimento = 2000;

// console.log("Nome:", nome);
// console.log("Ano de nascimento:", anoNascimento);

// =======================================================
// 3. Tipos primitivos
// =======================================================

// let texto = "JavaScript"; // String
// let numero = 42; // Number
// let estaLogado = true; // Boolean
// let valorNulo = null; // Null
// let indefinido; // Undefined

// console.log(typeof texto);
// console.log(typeof numero);
// console.log(typeof estaLogado);
// console.log(typeof valorNulo);
// console.log(typeof indefinido);

// =======================================================
// 4. Tipagem dinâmica
// =======================================================

// let variavel = "Sou uma string";
// console.log(typeof variavel);

// variavel = 100; // agora é número
// console.log(typeof variavel);

// variavel = true; // agora é booleano
// console.log(typeof variavel);

// =======================================================
// 5. Operadores de atribuição
// =======================================================

let x = 10;
// x += 5;
// x = x + 5;
// console.log("x += 5 →", x);

// x -= 2;
// x = x - 2;
// console.log("x -= 2 →", x);

// x *= 3;
// console.log("x *= 3 →", x);

// x /= 4;
// console.log("x /= 4 →", x);

// =======================================================
// 6. Operadores aritméticos
// =======================================================

// let a = 10;
// let b = 2;
// console.log("Soma:", a + b);
// console.log("Subtração:", a - b);
// console.log("Multiplicação:", a * b);
// console.log("Divisão:", a / b);
// console.log("Resto:", a % b);
// console.log("Potência:", a ** b);

// =======================================================
// 7. Operadores lógicos
// =======================================================

// let maiorDeIdade = true;
// let temCarteira = true;

// console.log("maiorDeIdade && temCarteira:", maiorDeIdade && temCarteira);
// console.log("maiorDeIdade || temCarteira:", maiorDeIdade || temCarteira);
// console.log("!temCarteira:", !temCarteira);

// =======================================================
// 8. Estruturas condicionais
// =======================================================

// let idade = 18;

// IF / ELSE
let idade = 18;
// let idadeMaisVelho = "18";

// (==) não faz verificação de tipo
// (===) faz verificação de tipo

// console.log(idade === idadeMaisVelho);

// if (idade > 18) {
//   console.log("Você é maior de idade.");
// } else if (idade === 18) {
//   console.log("Voce acabou de fazer 18 anos");
// } else {
//   console.log("Você é menor de idade.");
// }

// ELSE IF
// let nota = 75;

// if (nota >= 90) {
//   console.log("Conceito A");
// } else if (nota >= 70) {
//   console.log("Conceito B");
// } else {
//   console.log("Conceito C");
// }

// Operador ternário
// let acesso = idade >= 18 ? "Permitido" : "Negado";
// console.log(acesso);

// ===============================
// SWITCH / CASE
// ===============================

// O switch/case é usado para comparar um valor contra várias possibilidades
// de forma mais organizada do que vários if/else if encadeados.

let diaSemana = 3;

// switch (diaSemana) {
//   case 1:
//     console.log("Domingo");
//     break;
//   case 2:
//     console.log("Segunda-feira");
//     break;
//   case 3:
//     console.log("Terça-feira");
//     break;
//   case 4:
//     console.log("Quarta-feira");
//     break;
//   case 5:
//     console.log("Quinta-feira");
//     break;
//   case 6:
//     console.log("Sexta-feira");
//     break;
//   case 7:
//     console.log("Sábado");
//     break;
//   default:
//     console.log("Dia inválido");
//     break;
// }

// =======================================================
// 9. Estruturas de repetição
// =======================================================

// i++ (i = i + 1)

// for (let i = 1; i <= 5; i++) {
//   console.log("Número:", i);
// }

// let contador = 1;
let temCarteira = true;
let nome = false;

console.log((temCarteira && nome) || temCarteira);
// do {
//   console.log("teste");
//   //   contador++;
// } while (contador === 2);

// while (contador === 2) {
//   console.log("teste");
//   //   contador = contador + 1;
//   //   contador++;
// }
