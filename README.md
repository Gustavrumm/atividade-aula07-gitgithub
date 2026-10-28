# Projeto Aula 07 — Git e GitHub

Projeto didático para a atividade prática da Aula 07 de Sistemas Distribuídos. Demonstra páginas web com HTML, CSS e JavaScript e serve de base para praticar versionamento.

## Funcionalidades

- `index.html`: página inicial com saudação e data dinâmica em JavaScript.
- `cadastro.html`: formulário com validação para cadastro de alunos.
- `alunos.html`: consulta, pesquisa e remoção de alunos.
- `css/style.css`: estilos responsivos.
- `js/`: comportamento das páginas.
- Os registros de alunos ficam no `localStorage` do navegador, neste computador/perfil.

## Como executar

1. Extraia a pasta do projeto.
2. Abra a pasta no Visual Studio Code.
3. Abra `index.html` no navegador. Não precisa instalar bibliotecas nem executar servidor.
4. Teste o cadastro e a consulta usando dados fictícios.

## Git: sequência de comandos da Aula 07

Abra o terminal integrado do VS Code (`Terminal > Novo Terminal`) na pasta do projeto:

```bash
git init
git status
git add .
git commit -m "Cria estrutura inicial do projeto"
git status
```

Depois de alterar um arquivo:

```bash
git status
git add .
git commit -m "Adiciona melhorias nas páginas"
git log --oneline
```

## Sincronizar com GitHub

1. Crie um repositório vazio no GitHub com o nome `atividade-aula07-gitgithub` (não marque para criar README, pois este projeto já contém um).
2. No terminal do VS Code, execute os comandos abaixo, substituindo `SEU_USUARIO` pelo seu login do GitHub:

```bash
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/atividade-aula07-gitgithub.git
git push -u origin main
```

Para trazer alterações do GitHub para o computador:

```bash
git pull origin main
```

Se o Git pedir identificação, configure seu nome e e-mail:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email-do-github"
```

## Como demonstrar no VS Code

1. Abra o painel **Source Control / Controle do Código-Fonte**.
2. Mostre os arquivos modificados depois de editar, por exemplo, o texto da página inicial.
3. Escreva uma mensagem de commit e selecione **Commit**.
4. Use **Sync Changes** ou **Push** para enviar as alterações.
5. Mostre o histórico com `git log --oneline` no terminal. Para um registro visual, instale uma extensão de histórico Git, se desejar, e abra o histórico de commits.

## Importante para a entrega

A atividade pede que você apresente o repositório local, a sincronização com o GitHub e os logs de alterações pelo VS Code. O ZIP fornece o projeto e este roteiro; para comprovar a sua conta e o uso do VS Code, execute os passos de Git e capture suas próprias telas do repositório, commits, push/pull e histórico.

## Estrutura do projeto
O projeto utiliza HTML, CSS e JavaScript para gerenciar o cadastro e a consulta de alunos.
