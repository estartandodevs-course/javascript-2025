# 📘 Aula: Objetos em JavaScript

## 🔹 O que são Objetos

Objetos em JavaScript são coleções de **pares chave-valor**.
Eles permitem organizar dados e comportamentos relacionados, representando entidades do mundo real.

```js
const pessoa = {
  nome: "Pedro",
  idade: 25,
  cidade: "Rio de Janeiro",
};
console.log(pessoa.nome); // Pedro
console.log(pessoa["idade"]); // 25
```

---

## 🔹 Manipular Objetos

Podemos **adicionar**, **alterar** ou **remover** propriedades:

```js
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
};

// Adicionar propriedade
carro.ano = 2022;

// Alterar valor
carro.modelo = "Hilux";

// Remover propriedade
delete carro.marca;

console.log(carro);
```

---

## 🔹 Object.keys(obj)

Retorna todas as **chaves** de um objeto:

```js
const usuario = { nome: "João", idade: 30, ativo: true };
console.log(Object.keys(usuario));
// ["nome", "idade", "ativo"]
```

---

## 🔹 Object.values(obj)

Retorna todos os **valores** do objeto:

```js
console.log(Object.values(usuario));
// ["João", 30, true]
```

---

## 🔹 Object.entries(obj)

Retorna todos os **pares \[chave, valor]** do objeto:

```js
console.log(Object.entries(usuario));
// [["nome", "João"], ["idade", 30], ["ativo", true]]
```

---

## 🔹 Adicionar propriedades dinamicamente

Basta atribuir um valor a uma nova chave:

```js
usuario.email = "joao@email.com";
console.log(usuario);
// { nome: "João", idade: 30, ativo: true, email: "joao@email.com" }
```

---

## 🔹 Funções Construtoras vs Classes

### Função Construtora (antigo)

```js
function PessoaConstrutora(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.apresentar = function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  };
}

const p1 = new PessoaConstrutora("Pedro", 28);
p1.apresentar();
```

### Classe (moderno, ES6+)

```js
class PessoaClasse {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const p2 = new PessoaClasse("Carlos", 35);
p2.apresentar();
```

---

### 🔹 Diferenças principais

- **Função Construtora:** forma antiga de criar moldes de objetos usando `new`.
- **Classe:** sintaxe moderna, mais clara, mas internamente funciona como função construtora.
- Ambas permitem criar **objetos com propriedades e métodos** de forma padronizada.

---
