const CHAVE_ALUNOS = "aula07-alunos";
const lista = document.querySelector("#lista-alunos");
const pesquisa = document.querySelector("#pesquisa");
const contador = document.querySelector("#contador");
const mensagem = document.querySelector("#mensagem");
const limparTodos = document.querySelector("#limpar-todos");

function obterAlunos() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_ALUNOS)) || [];
  } catch {
    return [];
  }
}

function renderizarAlunos() {
  const termo = pesquisa.value.trim().toLocaleLowerCase("pt-BR");
  const filtrados = obterAlunos().filter((aluno) =>
    [aluno.nome, aluno.email, aluno.curso]
      .some((valor) => valor.toLocaleLowerCase("pt-BR").includes(termo))
  );

  contador.textContent = `${filtrados.length} ${filtrados.length === 1 ? "aluno" : "alunos"}`;
  lista.replaceChildren();

  if (filtrados.length === 0) {
    const vazio = document.createElement("div");
    vazio.className = "vazio";
    vazio.textContent = termo ? "Nenhum aluno corresponde à pesquisa." : "Nenhum aluno cadastrado ainda. Use “Novo aluno” para começar.";
    lista.append(vazio);
    return;
  }

  filtrados.forEach((aluno) => {
    const cartao = document.createElement("article");
    cartao.className = "aluno";
    const informacoes = document.createElement("div");
    const nome = document.createElement("h2");
    nome.textContent = aluno.nome;
    const email = document.createElement("p");
    email.textContent = aluno.email;
    const curso = document.createElement("span");
    curso.className = "curso-tag";
    curso.textContent = aluno.curso;
    informacoes.append(nome, email, curso);

    const remover = document.createElement("button");
    remover.className = "remover";
    remover.type = "button";
    remover.textContent = "Remover";
    remover.addEventListener("click", () => {
      const atualizados = obterAlunos().filter((item) => item.id !== aluno.id);
      localStorage.setItem(CHAVE_ALUNOS, JSON.stringify(atualizados));
      renderizarAlunos();
      mensagem.textContent = "Registro removido.";
    });

    cartao.append(informacoes, remover);
    lista.append(cartao);
  });
}

pesquisa.addEventListener("input", renderizarAlunos);
limparTodos.addEventListener("click", () => {
  if (obterAlunos().length === 0) {
    mensagem.textContent = "Não há registros para remover.";
    return;
  }
  if (confirm("Tem certeza que deseja apagar todos os alunos deste navegador?")) {
    localStorage.removeItem(CHAVE_ALUNOS);
    mensagem.textContent = "Todos os registros foram removidos.";
    renderizarAlunos();
  }
});

renderizarAlunos();
