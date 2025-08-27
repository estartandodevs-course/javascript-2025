# Aula 4 - Funções e Arrow Functions

Nesta aula, estudaremos funções no JavaScript, incluindo sua forma
tradicional e a versão mais moderna conhecida como **Arrow Functions**.

---

## 📌 O que veremos hoje

1.  **O que são funções**
2.  **Funções tradicionais**
3.  **Parâmetros e retorno**
4.  **Escopo de variáveis**
5.  **Arrow Functions**
6.  **Diferenças entre funções normais e arrow functions**
7.  **Vantagens e cuidados com Arrow Functions**

---

## 1. O que são funções?

Funções são blocos de código que podem ser **reutilizados** sempre que
necessário. Elas permitem **organizar melhor** o programa, evitando
repetição de código.

**Exemplo simples:**

```js
function dizerOla() {
  console.log("Olá, mundo!");
}

dizerOla(); // Executa a função
```

---

## 2. Funções Tradicionais

A sintaxe básica de uma função tradicional é:

```js
function nomeDaFuncao(param1, param2) {
  // código a ser executado
  return resultado;
}
```

Exemplo:

```js
function somar(a, b) {
  return a + b;
}

console.log(somar(5, 3)); // Saída: 8
```

---

## 3. Parâmetros e Retorno

- **Parâmetros**: valores que a função recebe para trabalhar.
- **Retorno**: valor que a função devolve após executar.

Exemplo:

```js
function multiplicar(x, y) {
  return x * y;
}

let resultado = multiplicar(4, 6);
console.log(resultado); // Saída: 24
```

---

## 4. Escopo de Variáveis

O escopo define **onde a variável pode ser acessada**.

- Variáveis declaradas **dentro de uma função** só existem ali dentro.
- Variáveis declaradas **fora da função** são globais.

Exemplo:

```js
let global = "Sou global";

function exemploEscopo() {
  let local = "Sou local";
  console.log(global); // funciona
  console.log(local); // funciona
}

exemploEscopo();
console.log(global); // funciona
// console.log(local); // Erro: local is not defined
```

---

## 5. Arrow Functions

As **Arrow Functions** foram introduzidas no ES6 e têm uma sintaxe mais
curta.

Forma tradicional:

```js
function dobro(n) {
  return n * 2;
}
```

Arrow Function equivalente:

```js
const dobro = (n) => n * 2;

console.log(dobro(7)); // Saída: 14
```

---

## 6. Diferenças entre funções normais e arrow functions

1.  **Sintaxe mais curta**.
2.  Arrow functions **não têm `this` próprio**, herdando do escopo onde
    foram criadas.
3.  Arrow functions não podem ser usadas como **construtoras** (não
    funcionam com `new`).

Exemplo de `this`:

```js
function Pessoa() {
  this.idade = 0;

  setInterval(function () {
    this.idade++;
    console.log(this.idade); // this não se refere à pessoa
  }, 1000);
}

new Pessoa();
```

Com **Arrow Function**:

```js
function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade); // this agora se refere à pessoa
  }, 1000);
}

new Pessoa();
```

---

## 7. Vantagens e Cuidados com Arrow Functions

✅ Mais curtas e legíveis\
✅ Herdam o `this` do escopo pai\
⚠️ Não funcionam como construtoras (`new`)\
⚠️ Não têm objeto `arguments` próprio

---

## 📝 Resumindo

- Funções permitem **reaproveitar código**.\
- Podem receber **parâmetros** e devolver valores com **return**.\
- O **escopo** define onde as variáveis são válidas.\
- **Arrow Functions** trazem uma sintaxe mais simples e um
  comportamento diferente com `this`.

---

👉 Agora abra o arquivo **script.js** e pratique os exemplos comentados!
