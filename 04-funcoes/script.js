// =========================================
// Aula: Funções e Arrow Functions em JavaScript
// =========================================

// ---------------------------
// 1. Declaração de Funções Tradicionais
// ---------------------------
// function saudacao(nome) {
//   // Uma função tradicional pode ser chamada em qualquer parte do código
//   // (pois sofre "hoisting", ou seja, é carregada no início)
//   return `Olá, ${nome}! Seja bem-vindo(a).`;
// }

// const nome = saudacao;
// console.log(saudacao("Pedro")); // Chamando a função

// ---------------------------
// 2. Funções com Parâmetros Opcionais
// ---------------------------
// function soma(a, b = 0, c = 2) {
//   // O segundo parâmetro tem valor padrão (0), caso não seja informado
//   return a + b + c;
// }

// console.log(soma(5)); // 5 (pois b = 0)
// console.log(soma(5, 3)); // 8

// ---------------------------
// 3. Funções Anônimas e Expressões de Funções
// ---------------------------

// const multiplicar = function (x, y) {
//   // Aqui armazenamos a função dentro de uma variável
//   console.log(x * y);
// };
// multiplicar(4, 6);

// console.log(); // 24

// ---------------------------
// 4. Arrow Functions
// ---------------------------
// São mais curtas e não têm "this" próprio, herdando o contexto externo
// const dividirInline = (x, y) => x / y;

// const dividir = (x, y) => {
//   return x / y;
// };

// console.log(dividir(10, 2)); // 5

// Caso a função tenha apenas uma linha, podemos omitir as chaves e o "return":
// const quadrado = (n) => n * n;

// console.log(quadrado(7)); // 49

// ---------------------------
// 5. Arrow Functions em Arrays (com métodos de ordem superior)
// ---------------------------
const numeros = [1, 2, 3, 4, 5];

// // Usando map para criar um novo array com os números dobrados
// const dobrados = numeros.map((numero, index) => `Indice ${index}: ${numero * 2}`);
// console.log("Números dobrados:", dobrados); // [2, 4, 6, 8, 10]

// // Usando filter para pegar apenas números pares
// const pares = numeros.find((numero) => numero % 2 === 0);

// console.log("Números pares:", pares); // [2, 4]

// // Usando reduce para somar todos os elementos
// const somaTotal = numeros.reduce((acc, n) => acc + n, 0);
// console.log("Soma total:", somaTotal); // 15

// ---------------------------
// 6. Diferença importante: THIS em funções normais vs Arrow Functions
// ---------------------------
// const objeto = {
//   nome: "Estartando Devs",
//   // Função tradicional: "this" se refere ao objeto
//   descricaoTradicional: function () {
//     return `Este é o ${this.nome}`;
//   },
//   // Arrow function: não tem "this" próprio
//   descricaoArrow: () => {
//     return `Este é o ${this.nome}`;
//   },
// };

// console.log(objeto.descricaoTradicional()); // "Este é o Curso de JS"
// console.log(objeto.descricaoArrow()); // "Este é o undefined"

// ---------------------------
// 7. Funções como parâmetros (callback functions)
// ---------------------------
// function executarOperacao(a, b, operacao) {
//   return operacao(a, b);
// }

// // Chamando com função tradicional
// console.log(
//   executarOperacao(10, 5, function (x, y) {
//     return x - y;
//   })
// ); // 5

// // Chamando com arrow function
// console.log(executarOperacao(10, 5, (x, y) => x + y)); // 15
