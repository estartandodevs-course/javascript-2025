// ===================================================================================
// TÓPICO 1: ENTENDENDO O CÓDIGO ASSÍNCRONO
// ===================================================================================
// O JavaScript, por natureza, é "síncrono" (synchronous), o que significa que ele executa uma tarefa de cada vez, em ordem. Se uma tarefa demora muito (ex: baixar uma imagem pesada), o programa inteiro trava até ela terminar. Isso é chamado de "blocking".

// O código "assíncrono" (asynchronous) não trava o programa. Ele inicia uma tarefa demorada e, enquanto ela está acontecendo "nos bastidores", o resto do código continua executando. Quando a tarefa termina, somos notificados.

console.log("1. Primeiro comando: Início do script.");

// setTimeout é uma função assíncrona.
// Ela agenda a execução de uma função para DEPOIS de um certo tempo (em milissegundos).
// Ela NÃO pausa o código.
setTimeout(() => {
  console.log("2. Segundo comando: Executado após 2 segundos.");
}, 2000); // 2000 ms = 2 segundos

console.log("3. Terceiro comando: Fim do script.");

//Qual será a ordem de exibição no console?

// ===================================================================================
// TÓPICO 2: CRIANDO PROMISES (RESOLVE E REJECT)
// ===================================================================================

// Promises são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona. É como um "recibo" que você ganha ao pedir um lanche: o lanche ainda não está pronto, mas o recibo é a promessa de que você o receberá (resolve) ou será informado de que houve um problema (reject).

function verificarNumero(numero) {
  // A Promise recebe uma função com dois parâmetros: resolve e reject.
  return new Promise((resolve, reject) => {
    console.log("A promessa foi iniciada...");

    setTimeout(() => {
      if (numero > 10) {
        // Se a condição for atendida, a promessa é cumprida (resolved).
        resolve(`O número ${numero} é maior que 10. Sucesso!`);
      } else {
        // Se não, a promessa é rejeitada (rejected).
        reject(new Error(`O número ${numero} não é maior que 10. Falha!`));
      }
    }, 2000); // Simula uma verificação que demora 2 segundos
  });
}

// ===================================================================================
// TÓPICO 3: CONSUMINDO PROMISES COM .THEN() E .CATCH()
// ===================================================================================

// Uma vez que temos uma Promise, precisamos de uma forma de lidar com seu resultado (sucesso ou falha).

// .then(): Executa quando a promise é resolvida (resolve). Recebe o valor passado no resolve.

// .catch(): Executa quando a promise é rejeitada (reject). Recebe o erro passado no reject.

// .finally(): Executa sempre, independentemente do resultado. Ótimo para tarefas de limpeza.

// Cenário de Sucesso
console.log("Testando a promessa com um número que vai dar certo (15)...");
verificarNumero(15)
  .then((mensagemDeSucesso) => {
    // Este bloco executa se a promise for resolvida.
    console.log("Resultado do .then():", mensagemDeSucesso);
  })
  .catch((erro) => {
    // Este bloco executa se a promise for rejeitada.
    console.error("Resultado do .catch():", erro.message);
  })
  .finally(() => {
    console.log("A verificação do número 15 foi finalizada.");
  });

// Cenário de Falha (vamos rodar após o outro para ver a ordem)
setTimeout(() => {
  console.log("\nTestando a promessa com um número que vai dar errado (5)...");
  verificarNumero(5)
    .then((mensagemDeSucesso) => {
      console.log("Resultado do .then():", mensagemDeSucesso);
    })
    .catch((erro) => {
      console.error("Resultado do .catch():", erro.message);
    })
    .finally(() => {
      console.log("A verificação do número 5 foi finalizada.");
    });
}, 2500); // Atraso para não misturar os logs

// ===================================================================================
// TÓPICO 4: USANDO FETCH PARA BUSCAR DADOS REAIS (API EM PORTUGUÊS)
// ===================================================================================

// Selecionamos o elemento da lista onde vamos inserir os feriados
const feriadosLista = document.getElementById("feriados-lista");

// A API de feriados precisa do ano. Vamos pegar o ano atual dinamicamente.
const anoAtual = new Date().getFullYear();
const apiFeriadosUrl = `https://brasilapi.com.br/api/feriados/v1/${2025}`;

console.log(`Buscando feriados para o ano de ${anoAtual}...`);

fetch(apiFeriadosUrl)
  .then((response) => {
    // A primeira etapa é a mesma: recebemos a resposta HTTP.
    console.log("Resposta da API recebida:", response);
    if (!response.ok) {
      throw new Error(`Erro de rede: ${response.status}`);
    }
    return response.json(); // Retorna a promise com os dados em formato JSON.
  })
  .then((listaDeFeriados) => {
    // Agora, 'listaDeFeriados' é um ARRAY de objetos.
    console.log("Dados dos feriados:", listaDeFeriados);

    // 1. Limpamos a lista (remove o item "Carregando...")
    feriadosLista.innerHTML = "";

    // 2. Usamos forEach para percorrer cada feriado no array
    listaDeFeriados.forEach((feriado) => {
      // 3. Para cada feriado, criamos um elemento <li>
      const itemDaLista = document.createElement("li");

      // Formata a data para o padrão brasileiro (DD/MM/AAAA)
      const dataFormatada = new Date(feriado.date).toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      });

      // 4. Adicionamos o conteúdo ao <li>
      itemDaLista.textContent = `${dataFormatada} - ${feriado.name}`;

      // 5. Adicionamos o <li> à nossa <ul> no HTML
      feriadosLista.appendChild(itemDaLista);
    });
  })
  .catch((erro) => {
    // O .catch() lida com qualquer falha na requisição.
    console.error("Falha ao buscar os feriados:", erro.message);
    feriadosLista.innerHTML = "<li>Não foi possível carregar os feriados.</li>";
  });

// ===================================================================================
// TÓPICO 5: EXECUTANDO VÁRIAS PROMISES COM PROMISE.ALL
// ===================================================================================

// Vamos criar duas promises simples que resolvem depois de tempos diferentes
// const promessa1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Dados do Usuário"), 1500)
// );
// const promessa2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Posts do Usuário"), 2000)
// );
// const promessaComErro = new Promise((_, reject) =>
//   setTimeout(() => reject("Erro de Permissão"), 1000)
// );

// console.log("Iniciando Promise.all com sucesso...");
// Promise.all([promessa1, promessa2])
//   .then((resultados) => {
//     // 'resultados' é um array com os valores resolvidos, na mesma ordem que as promises foram passadas.
//     console.log("Promise.all resolvida com sucesso! Resultados:", resultados);
//     const [dadosDoUsuario, postsDoUsuario] = resultados; // Desestruturando o array
//     console.log(`Recebido: ${dadosDoUsuario} e ${postsDoUsuario}`);
//   })
//   .catch((erro) => {
//     console.error("Promise.all falhou:", erro);
//   });

// // Cenário com erro: se UMA falhar, o Promise.all inteiro falha.
// console.log("\nIniciando Promise.all com erro...");
// Promise.all([promessa1, promessaComErro, promessa2])
//   .then((resultados) => {
//     console.log("Este .then() nunca será executado.", resultados);
//   })
//   .catch((erro) => {
//     console.error("Promise.all falhou como esperado:", erro);
//   });

// // ===================================================================================
// // TÓPICO 6: ASYNC/AWAIT - SIMPLIFICANDO O CÓDIGO ASSÍNCRONO
// // ===================================================================================

// // A mesma lógica de buscar frase, mas escrita de forma diferente.
// async function buscarOutraFrase() {
//   console.log("Iniciando busca com async/await...");

//   // Usamos try/catch para lidar com erros, de forma similar ao código síncrono.
//   try {
//     // 'await' pausa a função aqui até o fetch() resolver e nos dar a resposta.
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`Erro HTTP: ${response.status}`);
//     }

//     // 'await' pausa novamente até o .json() resolver e nos dar os dados.
//     const dados = await response.json();

//     console.log("Dados recebidos com async/await:", dados);
//     return `"${dados.content}" - ${dados.author}`;
//   } catch (erro) {
//     console.error("Ocorreu um erro na função async:", erro.message);
//     return "Falha ao buscar uma nova frase.";
//   }
// }

// // Para usar a função async, podemos usar .then() ou chamar de outra função async.
// buscarOutraFrase().then((fraseFormatada) => {
//   console.log("Resultado da função async:", fraseFormatada);
// });
