# 📘 Aula Prática de JavaScript

Este material é um guia de estudo para a introdução prática ao **JavaScript**.  
Ele foi pensado para ser usado junto com o arquivo `script.js`, onde os exemplos estão comentados e podem ser descomentados para execução no navegador ou no console do VS Code.

---

## 📌 1. O que é JavaScript e para que é utilizado

JavaScript é uma linguagem de programação interpretada e de tipagem dinâmica, usada principalmente para dar **interatividade** a páginas web.  
Hoje em dia, também é utilizado para:

- **Frontend** → adicionar lógica em páginas web.
- **Backend** → com **Node.js**.
- **Aplicações Mobile/Desktop** → frameworks como React Native, Electron.
- **IoT** e até Inteligência Artificial.

👉 **Exemplo no `script.js`:**

```js
console.log("Olá, JavaScript! 🚀");
```

---

## 📌 2. Variáveis

São **caixas na memória** que guardam valores.  
Em JavaScript temos três formas principais:

- `let` → variável que pode mudar.
- `const` → constante (não muda depois de definida).
- `var` → forma antiga, evite usar.

👉 **Exemplo:**

```js
let nome = "Pedro";
const anoNascimento = 2000;
```

👉 **Exercício:**  
Crie variáveis para armazenar seu **nome**, **idade** e **cidade**, e mostre no console.

---

## 📌 3. Tipos primitivos

São os tipos básicos de valores no JavaScript:

- **String** → `"Texto entre aspas"`.
- **Number** → `42`, `3.14`.
- **Boolean** → `true`, `false`.
- **Null** → valor nulo (intencionalmente vazio).
- **Undefined** → variável declarada mas sem valor.

👉 **Exemplo:**

```js
let texto = "JavaScript"; // String
let numero = 42; // Number
let estaLogado = true; // Boolean
let valorNulo = null; // Null
let indefinido; // Undefined
```

👉 **Exercício:**  
Crie uma variável de cada tipo primitivo e exiba o tipo usando `typeof`.

---

## 📌 4. Tipagem dinâmica

No JavaScript as variáveis não precisam declarar tipo.  
Elas podem mudar de tipo ao longo do programa.

👉 **Exemplo:**

```js
let valor = "Sou uma string"; // String
valor = 100; // Number
valor = true; // Boolean
```

👉 **Exercício:**  
Crie uma variável que comece como string, depois vire number e por fim boolean, mostrando o `typeof` em cada etapa.

---

## 📌 5. Operadores de atribuição

Permitem **atribuir valores** a variáveis.

Principais operadores:

- `=` → atribuição simples.
- `+=` → soma e atribui.
- `-=` → subtrai e atribui.
- `*=` → multiplica e atribui.
- `/=` → divide e atribui.

👉 **Exemplo:**

```js
let x = 10;
x += 5; // x = x + 5 → 15
x -= 2; // x = x - 2 → 13
```

👉 **Exercício:**  
Comece com uma variável `let y = 20` e aplique todos os operadores acima.

---

## 📌 6. Operadores aritméticos

Permitem realizar cálculos matemáticos:

- `+` → soma
- `-` → subtração
- `*` → multiplicação
- `/` → divisão
- `%` → resto da divisão
- `**` → potência

👉 **Exemplo:**

```js
let a = 10,
  b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(a ** b); // 1000
```

👉 **Exercício:**  
Crie duas variáveis numéricas e faça todas as operações aritméticas.

---

## 📌 7. Operadores lógicos

Usados para combinar ou inverter valores booleanos:

- `&&` (E) → retorna true se **todas** as condições forem verdadeiras.
- `||` (OU) → retorna true se **pelo menos uma** condição for verdadeira.
- `!` (NÃO) → inverte o valor.

👉 **Exemplo:**

```js
let maiorDeIdade = true;
let temCarteira = false;

console.log(maiorDeIdade && temCarteira); // false
console.log(maiorDeIdade || temCarteira); // true
console.log(!temCarteira); // true
```

👉 **Exercício:**  
Crie duas variáveis booleanas (`estuda` e `trabalha`) e combine-as usando `&&`, `||` e `!`.

---

## 📌 8. Estruturas condicionais

Permitem que o programa execute diferentes blocos de código dependendo de condições.

👉 **Exemplo:**

```js
let idade = 18;

if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

let diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
    break;
}
```

👉 **Exercício:**  
Crie uma condicional que classifique notas:

- `>= 7` → "Aprovado"
- `>= 5` → "Recuperação"
- `< 5` → "Reprovado"

---

## 📌 9. Estruturas de repetição

Servem para **repetir um bloco de código**.

### 🔹 For

Usado quando sabemos quantas vezes repetir.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}
```

### 🔹 While

Usado quando não sabemos exatamente quantas vezes.

```js
let contador = 1;
while (contador <= 5) {
  console.log("Contando:", contador);
  contador++;
}
```

👉 **Exercícios:**

1. Faça um `for` que exiba os números de 1 a 10.
2. Faça um `while` que exiba apenas os números pares até 20.

---

## 🚀 Como usar esta aula

1. Abra o `index.html` no navegador (com extensão **Live Server** no VS Code, se preferir).
2. Abra o arquivo `script.js`.
3. Vá **descomentando cada bloco** à medida que estuda os tópicos.
4. Veja os resultados no **console do navegador** (F12 → Aba Console).

---
