// ===================================================================================
// AULA: MÉTODOS DE ARRAY EM JAVASCRIPT
// ===================================================================================

// Vamos usar este array como base para a maioria dos nossos exemplos.
let frutas = ["Maçã", "Banana", "Laranja", "Morango"];
// console.log("Array original:", frutas);

// ===================================================================================
// TÓPICO 1: Modificação do Array (Adicionando e Removendo nas Extremidades)
// ===================================================================================

// --- push() ---
// Adiciona um ou mais elementos ao FINAL do array e retorna o novo comprimento.
// frutas.push("Uva");
// console.log("Array após push():", frutas); // Saída: ['Maçã', 'Banana', 'Laranja', 'Morango', 'Uva']

// // --- pop() ---
// // Remove o ÚLTIMO elemento de um array e retorna o elemento removido.

// let frutaRemovida = frutas.pop();
// console.log("Array após pop():", frutas); // Saída: ['Maçã', 'Banana', 'Laranja', 'Morango']
// console.log("Fruta removida:", frutaRemovida); // Saída: 'Uva'

// --- unshift() ---
// Adiciona um ou mais elementos ao INÍCIO do array e retorna o novo comprimento.

// novoTamanho = frutas.unshift("Pera");
// console.log("Array após unshift():", frutas); // Saída: ['Pera', 'Maçã', 'Banana', 'Laranja', 'Morango']
// console.log("Novo tamanho do array:", novoTamanho); // Saída: 5

// // --- shift() ---
// // Remove o PRIMEIRO elemento de um array e retorna o elemento removido.
// frutaRemovida = frutas.shift();
// console.log("Array após shift():", frutas); // Saída: ['Maçã', 'Banana', 'Laranja', 'Morango']
// console.log("Fruta removida:", frutaRemovida); // Saída: 'Pera'

// ===================================================================================
// TÓPICO 2: Adição/Remoção de Elementos em Posições Específicas
// ===================================================================================

let vegetais = ["Cenoura", "Batata", "Alface", "Tomate"];
// console.log("Array para os exemplos:", vegetais);

// --- splice() ---
// Altera o conteúdo de um array removendo, substituindo ou adicionando elementos.
// Sintaxe: array.splice(indiceInicial, quantidadeARemover, elemento1, elemento2, ...)

// Exemplo 1: Removendo elementos
let removidosSplice = vegetais.splice(1, 2);
// console.log("Array após splice() de remoção:", vegetais); // Saída: ['Cenoura', 'Tomate']
// console.log("Itens removidos:", removidosSplice); // Saída: ['Batata', 'Alface']

// Exemplo 2: Adicionando elementos sem remover nenhum

vegetais.splice(1, 0, "Brócolis", "Espinafre");
// console.log("Array após splice() de adição:", vegetais); // Saída: ['Cenoura', 'Brócolis', 'Espinafre', 'Tomate']

// Exemplo 3: Substituindo um elemento

vegetais.splice(3, 1, "Abóbora");
// console.log("Array após splice() de substituição:", vegetais); // Saída: ['Cenoura', 'Brócolis', 'Espinafre', 'Abóbora']

// --- slice() ---
// Retorna uma CÓPIA RASA de uma parte do array em um novo array. O array original não é modificado.
// Sintaxe: array.slice(indiceInicial, indiceFinal) (o indiceFinal não é incluído)

let favoritas = frutas.slice(1, 3); // Pega do índice 1 ('Banana') até o 2 ('Laranja')
// console.log("Novo array criado com slice():", favoritas); // Saída: ['Banana', 'Laranja']
// console.log("Array original não foi modificado:", frutas); // Saída: ['Maçã', 'Banana', 'Laranja', 'Morango']

// ===================================================================================
// TÓPICO 3: Busca de Elementos
// ===================================================================================

const numeros = [10, 20, 30, 40, 30];

// // --- indexOf() ---
// // Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se não estiver presente.
// let indice = numeros.indexOf(30);
// console.log("O índice de 30 é:", indice); // Saída: 2 (encontra a primeira ocorrência)

// indice = numeros.indexOf(99);
// console.log("O índice de 99 é:", indice); // Saída: -1

// // --- includes() ---
// // Determina se um array contém um determinado elemento, retornando true ou false.
// let temNumero = numeros.includes(40);
// console.log("O array inclui o número 40?", temNumero); // Saída: true

// temNumero = numeros.includes(99);
// console.log("O array inclui o número 99?", temNumero); // Saída: false

// ===================================================================================
// TÓPICO 4: Iteração e Métodos Funcionais
// ===================================================================================

const precos = [10.5, 25, 8.75, 100];
// console.log("Array para os exemplos de iteração:", precos);

// // --- forEach() ---
// // Executa uma função fornecida uma vez para cada elemento do array. Não retorna um novo array.

// precos.forEach((preco, index) => {
//   console.log(`Item ${index + 1}: R$ ${preco.toFixed(2)}`);
// });

// --- map() ---
// Cria um NOVO array com os resultados da chamada de uma função para cada elemento do array.
// const precosDobrados = precos.map((preco) => preco * 2);
// console.log("Array original:", precos);
// console.log("Novo array com preços dobrados:", precosDobrados);

// // --- filter() ---
// // Cria um NOVO array com todos os elementos que passaram no teste implementado pela função fornecida.

// const precosAltos = precos.filter((preco) => preco > 20);
// console.log("Array original:", precos);
// console.log("Novo array com preços altos:", precosAltos);

// // --- find() ---
// // Retorna o VALOR do PRIMEIRO elemento no array que satisfaz a função de teste fornecida. Caso contrário, undefined é retornado.
// const primeiroPrecoAlto = precos.find((preco) => preco > 20);
// console.log("Primeiro preço encontrado acima de 20:", primeiroPrecoAlto); // Saída: 25

// --- sort() ---
// Ordena os elementos de um array no próprio local (in-place) e retorna o array.
// CUIDADO: Por padrão, sort() converte elementos para strings e os ordena.
// const numerosDesordenados = [5, 100, 25, 1, 30];
// console.log(
//   "Ordenação padrão (incorreta para números):",
//   numerosDesordenados.slice().sort()
// ); // slice() para não alterar o original aqui

// // Para ordenar números corretamente, você deve fornecer uma função de comparação.
// // (a, b) => a - b para ordem crescente
// // (a, b) => b - a para ordem decrescente
// numerosDesordenados.sort((a, b) => b - a);
// console.log("Array ordenado corretamente (crescente):", numerosDesordenados);

// let nomes = ["Carlos", "ana", "Beatriz", "Daniel"];
// let nomeMinusculo = [];
// nomes.forEach((nome) => nomeMinusculo.push(nome.toLowerCase()));
// nomeMinusculo.sort();
// console.log("Nomes ordenados alfabeticamente:", nomeMinusculo);

// --- reduce() ---
// Executa uma função "redutora" para cada elemento do array, resultando em um único valor de retorno.
// Sintaxe: array.reduce((acumulador, valorAtual, index, array) => { ... }, valorInicialDoAcumulador)

// const totalPrecos = precos.reduce((soma, precoAtual) => {
//   return soma + precoAtual;
// }, 0); // O '0' é o valor inicial da 'soma' (acumulador)

// console.log("O valor total é:", totalPrecos); // Saída: 144.25
