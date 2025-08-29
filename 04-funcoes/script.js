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
// 5. Diferença importante: THIS em funções normais vs Arrow Functions
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
// 6. Funções como parâmetros (callback functions)
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

// // // Chamando com arrow function
// console.log(executarOperacao(10, 5, (x, y) => x + y)); // 15

// ---------------------------
// 7. Controle de Erros com try/catch/finally
// ---------------------------
// function divisaoSegura(dividendo, divisor) {
//   console.log(`\nTentando dividir ${dividendo} por ${divisor}...`);

//   if (divisor === 0) {
//     // A palavra-chave 'throw' cria e lança uma exceção (erro).
//     // A execução da função para aqui e o controle passa para o bloco 'catch' mais próximo.
//     throw new Error("Divisão por zero não é permitida!");
//   }

//   // Este código só é alcançado se nenhum erro for lançado.
//   return dividendo / divisor;
// }

// function calcular(dividendo, divisor) {
//   try {
//     console.log("Iniciando o bloco try...");
//     const resultado = divisaoSegura(dividendo, divisor);
//     console.log(`✅ Sucesso! O resultado é: ${resultado}`);
//   } catch (erro) {
//     // Este bloco só será executado quando a função lançar um erro.
//     console.error(`❌ Erro capturado: ${erro.message}`);
//   } finally {
//     console.log("Bloco 'finally' executado.");
//   }
// }

// calcular(10, 2);
// calcular(10, 0); // Esta chamada vai lançar um erro.
