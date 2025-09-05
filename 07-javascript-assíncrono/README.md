# JavaScript Assíncrono

Este repositório contém o material para uma aula prática e focada sobre como o JavaScript lida com operações assíncronas. O objetivo é guiar os alunos desde o conceito fundamental de assincronicidade até as formas mais modernas de escrever código assíncrono, como `async/await`.

A aula utiliza exemplos práticos e progressivos, culminando na busca de dados reais de uma API pública brasileira.

## 📚 Tópicos Abordados

A aula está dividida em seções claras dentro do arquivo `script.js`, cobrindo os seguintes conceitos:

1.  **O que é Código Assíncrono?**

    - Diferença entre código síncrono ("bloqueante") e assíncrono ("não-bloqueante").
    - Demonstração prática com `setTimeout` para visualizar a ordem de execução.

2.  **Promises (`resolve` e `reject`)**

    - Entendendo o objeto `Promise` como uma promessa de um resultado futuro.
    - Como criar uma função que retorna uma `Promise` e como usar `resolve` para sucesso e `reject` para falha.

3.  **Recebendo Retorno de Promise (`.then()` e `.catch()`)**

    - Como consumir uma `Promise` usando os métodos `.then()` para lidar com o sucesso.
    - Como tratar erros de forma elegante com o método `.catch()`.
    - O uso do bloco `.finally()` para executar código de limpeza.

4.  **Método `fetch()` (Uso no Mundo Real)**

    - Aplicação prática de Promises para fazer requisições HTTP a uma API real.
    - Uso da **BrasilAPI** para buscar uma lista de feriados nacionais do ano corrente, mostrando como lidar com dados em português.

5.  **Trabalhando com Várias Promises (`Promise.all`)**

    - Como executar múltiplas operações assíncronas em paralelo e aguardar que todas sejam concluídas.
    - Como `Promise.all` lida com o sucesso (retornando um array de resultados) e com a falha (rejeitando assim que uma das promises falha).

6.  **`async` e `await` (A Sintaxe Moderna)**
    - Introdução à sintaxe `async/await` para escrever código assíncrono que se parece com código síncrono, tornando-o mais limpo e legível.
    - Como usar `try...catch` para tratamento de erros em funções `async`.
