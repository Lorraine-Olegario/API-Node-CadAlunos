# API-Node-CadAlunos+

Esta é uma API desenvolvida em Node.js que possui um CRUD (Create, Read, Update, Delete) de alunos. O projeto utiliza o banco de dados SQLite e a biblioteca Sequelize para facilitar a interação com o banco de dados.

## Instalando o Node.js

Antes de prosseguir com a instalação da API, é necessário ter o Node.js instalado em seu sistema. Siga as instruções abaixo para instalar o Node.js:

1.  Acesse o site oficial do Node.js em https://nodejs.org.
2.  Faça o download da versão adequada ao seu sistema operacional.
3.  Execute o instalador e siga as instruções fornecidas para concluir a instalação.

## Instalando as Dependências

Para instalar as dependências do projeto, siga as etapas abaixo:

1.  Navegue até a raiz do projeto da API no terminal ou prompt de comando.
2.  Execute o comando, isso irá baixar e instalar todas as dependências listadas no arquivo package.json `npm install`
   
## Rodando as Migrations do Sequelize

As migrations são responsáveis por criar a estrutura do banco de dados necessário para o funcionamento da API. Para executar as migrations usando o Sequelize CLI, siga as etapas abaixo:

1.  Certifique-se de que o banco de dados SQLite está corretamente configurado no arquivo config/database.js do projeto.
2.  Na raiz do projeto da API, execute o seguinte comando:
`npx sequelize-cli db:migrate` 

Isso irá executar todas as migrations pendentes e criar as tabelas necessárias no banco de dados SQLite.

## Executando a API
Após instalar as dependências e executar as migrations, você pode iniciar a API executando o seguinte comando na raiz do projeto:

`npm start`

A API estará em execução e poderá ser acessada através do endpoint definido. A API está rodando na porta 3003.

Lembre-se de consultar a documentação da API para obter mais informações sobre os endpoints disponíveis e como utilizá-los.
