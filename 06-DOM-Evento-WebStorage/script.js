// Espera o documento HTML ser completamente carregado antes de executar o script.
// Isso garante que todos os elementos do HTML existam quando o JS tentar acessá-los.
document.addEventListener("DOMContentLoaded", () => {
  // ===================================================================================
  // TÓPICO 1 e 2: DOM, SELETORES e CAPTURA DE ELEMENTOS
  // ===================================================================================
  // O DOM (Document Object Model) é a representação do seu HTML como um objeto JavaScript.
  // É através do objeto 'document' que o JavaScript consegue "conversar" com o HTML.
  // --- Capturando elementos ---
  // 1. getElementById: Captura um único elemento pelo seu atributo 'id'. É o mais rápido.
  const addButton = document.getElementById("add-item-btn");
  // addButton.textContent = "teste"
  // addButton.innerText = "teste";
  // addButton.innerHTML = "<strong>Teste</strong>";
  console.log(addButton);
  const removeButton = document.getElementById("remove-last-btn");
  const itemInput = document.getElementById("item-input");
  const taskList = document.getElementById("task-list");
  // // 2. querySelector: Captura o *primeiro* elemento que corresponde a um seletor CSS. Super versátil.
  const mainTitle = document.querySelector("#main-title"); // Pega pelo ID
  const container = document.querySelector(".container"); // Pega pela classe
  console.log("Botão de Adicionar:", addButton);
  console.log("Título Principal:", mainTitle);
  // ===================================================================================
  // TÓPICO 3: Buscando, Criando e Removendo Elementos
  // ===================================================================================
  // --- Criando e Adicionando um Elemento ---
  function adicionarTarefa(textoDaTarefa) {
    // 1. Criar um novo elemento HTML (neste caso, uma tag <li>)
    const novaLi = document.createElement("li");
    // 2. Definir o conteúdo de texto do novo elemento
    novaLi.textContent = textoDaTarefa;
    // 3. Adicionar o novo elemento (<li>) como filho da nossa lista (<ul>)
    taskList.appendChild(novaLi);
  }
  // --- Removendo um Elemento ---
  function removerUltimaTarefa() {
    // querySelectorAll seleciona TODOS os elementos que correspondem ao seletor CSS.
    // Retorna uma NodeList (parecida com um array).
    const todasAsTarefas = document.querySelectorAll("#task-list li");

    // let novoArrayTarefas = Array.from(todasAsTarefas); //transformando nodelist em array

    if (todasAsTarefas.length > 0) {
      // Pega o último item da lista
      const ultimaTarefa = todasAsTarefas[todasAsTarefas.length - 1];
      // Remove o elemento do DOM
      ultimaTarefa.remove();
    } else {
      alert("Não há tarefas para remover!");
    }
  }
  // removerUltimaTarefa();
  // ===================================================================================
  // TÓPICO 4: Eventos com addEventListener
  // ===================================================================================
  // addEventListener é a forma moderna de "ouvir" por interações do usuário.
  // Sintaxe: elemento.addEventListener('tipo_do_evento', funcao_a_executar);
  // --- Evento de clique no botão "Adicionar" ---
  addButton.addEventListener("click", () => {
    // Busca o valor atual do campo de input, removendo espaços em branco no início e fim.
    const novoTexto = itemInput.value.trim();
    if (novoTexto !== "") {
      // Garante que não adicionemos tarefas vazias
      adicionarTarefa(novoTexto);
      // itemInput.value = ""; // Limpa o campo de input após adicionar
      itemInput.focus(); // Coloca o cursor de volta no input para facilitar a digitação
    } else {
      alert("Por favor, digite uma tarefa.");
    }
  });
  // --- Evento de clique no botão "Remover Última" ---
  removeButton.addEventListener("click", () => {
    removerUltimaTarefa();
  });
  // --- Delegação de Eventos: marcar tarefa como concluída ---
  // Em vez de adicionar um evento em cada <li>, adicionamos um único evento no pai (<ul>).
  // Isso funciona também para os novos <li> que forem adicionados dinamicamente.
  taskList.addEventListener("click", (event) => {
    // 'event.target' é o elemento exato que foi clicado (neste caso, pode ser um <li>).
    // console.log(event.target.textContent);
    if (event.target.tagName === "LI") {
      // classList.toggle adiciona a classe se não existir, e remove se já existir.
      event.target.classList.toggle("completed");
      // event.target.classList.add("completed");
      // event.target.classList.remove("completed");
    }
  });
  // ===================================================================================
  // TÓPICO 5: Web Storage (localStorage e sessionStorage)
  // ===================================================================================
  // Web Storage permite salvar dados no navegador do usuário em formato chave-valor.
  // - localStorage: persiste os dados mesmo após fechar o navegador.
  // - sessionStorage: os dados são apagados quando a sessão da página termina (aba é fechada).
  const saveButton = document.getElementById("save-btn");
  const loadButton = document.getElementById("load-btn");
  const clearButton = document.getElementById("clear-btn");
  const statusP = document.getElementById("storage-status");
  // --- Salvar dados no localStorage ---
  saveButton.addEventListener("click", () => {
    const username = prompt("Digite seu nome de usuário:");
    if (username) {
      // localStorage só armazena strings.
      localStorage.setItem("username", username);
      statusP.textContent = `Usuário '${username}' salvo no localStorage!`;
      const user = {
        key: "username",
        value: username,
      };
      console.log("Dado salvo:", user);
    }
  });
  // --- Carregar dados do localStorage ---
  loadButton.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      statusP.textContent = `Usuário carregado: '${savedUser}'`;
      console.log("Dado carregado:", savedUser);
    } else {
      statusP.textContent = "Nenhum usuário salvo encontrado.";
      console.log("Nenhum dado encontrado com a chave 'username'.");
    }
  });
  // --- Limpar dados do localStorage ---
  clearButton.addEventListener("click", () => {
    // removeItem remove uma chave específica.
    localStorage.removeItem("username");
    // clear() removeria TODAS as chaves do seu site.
    // localStorage.clear();
    statusP.textContent = "Dados do usuário foram limpos.";
    console.log("Chave 'username' removida do localStorage.");
  });
});
