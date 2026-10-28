const dataAtual = document.querySelector("#data-atual");
const saudacao = document.querySelector("#saudacao");

if (dataAtual) {
  dataAtual.textContent = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full"
  }).format(new Date());
}

if (saudacao) {
  const hora = new Date().getHours();
  const periodo = hora < 12 ? "bom dia" : hora < 18 ? "boa tarde" : "boa noite";
  saudacao.textContent = `Olá, ${periodo}!`;
}
