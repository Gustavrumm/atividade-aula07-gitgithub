const formAluno = document.querySelector("#form-aluno");
const mensagemCadastro = document.querySelector("#mensagem");
const CHAVE_ALUNOS = "aula07-alunos";

function obterAlunos() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_ALUNOS)) || [];
  } catch {
    return [];
  }
}

formAluno.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const aluno = {
    id: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),
    nome: document.querySelector("#nome").value.trim(),
    email: document.querySelector("#email").value.trim(),
    curso: document.querySelector("#curso").value
  };

  if (aluno.nome.length < 3 || !aluno.email || !aluno.curso) {
    mensagemCadastro.textContent = "Confira os campos antes de salvar.";
    mensagemCadastro.className = "mensagem erro";
    return;
  }

  const alunos = obterAlunos();
  alunos.push(aluno);
  localStorage.setItem(CHAVE_ALUNOS, JSON.stringify(alunos));
  formAluno.reset();
  mensagemCadastro.textContent = "Aluno cadastrado com sucesso!";
  mensagemCadastro.className = "mensagem";
});
