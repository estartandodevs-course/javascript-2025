# Lógica de Programação, Template Literals, Arrays e Estrutura de Repetição `for`

## 1. Introdução à Lógica de Programação e Algoritmos

A **lógica de programação** é a forma como estruturamos nosso raciocínio para resolver problemas usando código. Um **algoritmo** é uma sequência de passos ordenados e finitos para atingir um objetivo.

Exemplo simples de algoritmo (em linguagem natural):

1. Pegar dois números.
2. Somar os dois números.
3. Mostrar o resultado.

Em JavaScript:

```javascript
let a = 5;
let b = 3;
let soma = a + b;
console.log("Resultado: " + soma);
```

## 2. Template Literals (ou Template Strings)

No JavaScript, as **Template Literals** permitem interpolar variáveis dentro de strings de forma mais prática. Em vez de usar `+` para concatenar, usamos \*\*acento grave\*\* e \${}\`.

Exemplo:

```javascript
let nome = "Maria";
let idade = 20;

// Sem template literal
console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");

// Com template literal
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
```

## 3. Arrays

Um **array** é uma lista de valores armazenados em uma única variável. Cada elemento possui um **índice**, que começa em `0`.

Exemplo:

```javascript
let frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Uva
```

Podemos adicionar elementos:

```javascript
frutas.push("Laranja");
console.log(frutas); // ["Maçã", "Banana", "Uva", "Laranja"]
```

## 4. Estrutura de Repetição `for` (com Arrays)

Usamos o **`for`** para percorrer listas e executar um bloco de código repetidamente.

Exemplo:

```javascript
let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  console.log(`Elemento no índice ${i}: ${numeros[i]}`);
}
```

### `for...of`

Forma simplificada para percorrer arrays:

```javascript
let cores = ["Vermelho", "Verde", "Azul"];

for (let cor of cores) {
  console.log(cor);
}
```

---

## ✅ Resumo da Aula

- **Algoritmos** são sequências de passos para resolver problemas.
- **Template Literals** facilitam a interpolação de variáveis em strings.
- **Arrays** permitem armazenar múltiplos valores em uma única variável.
- O **`for`** é usado para percorrer arrays e executar ações repetidamente.
