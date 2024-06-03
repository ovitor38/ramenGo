<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# RED VENTURES Backend test, este é o meu resultado do desafio proposto pela RED VENTURES . Essa API consiste em um sistema para restarurante com intuito de buscar itens para realizar pedidos. Nele foram utilizadas as seguintes tecnologias: Nestjs, Prisma ORm, Swagger, Docker e PostgreSQL.

## Descrição 
Nessa API REST foram aplicados conceitos principais do SOLID , para que possa ser de fácil sua mantenabilidade e escalabilidade. Buscando sempre pelo melhor padrão utilizado na área de desenvolvimento. A fim de otimizar o tempo e facilitar o desenvolvimento foi o utilizando o framework NestJS que trás diversas facilidades na hora de criar o código 

### Arquitetura
O projeto segue a famosa Arquitetura Limpa, foi estruturado principalmente com a CLI do NESTJs a criação desse padrão fica super ágil e isso bastante utilizado nesse projeto 

### Funcionalidaes

-**Autenticação de Usuários**
  - A autenticação é feita através do email e senha do usuário, com isso a API é capaz de retornar um token JWT que lhe garantira acesso as demais funcionalidades

-**Crud Usuários**
  - A API permite a criação de usuários requirindo: nome, email e uma senha, nas funcionalidades da rota de usuários todas as rotas são protegidas por autenficação JWT (exceto a de criação), essa proteção serve que apenas o usuário autenticado modifique ou exclua os seus dados

-**CRUD Proteinas e Caldos**
  - A aplicação também permite a realizar todas as operações de um CRUD para proteinas e caldos para ter acesso a esses endpoints é necessário uma API-KEY 


### Tecnologias Complementares

- **Docker:** O projeto utiliza Docker, as imagens tanto do Postgres quanto do Redis estão contidas nele. Dessa forma o projeto pode ser facilmente executado por outros desenvolvedores sendo desnecessários a instalação desses aplicativos em seu ambiente de desenvolvimento
- **Commit-lint:** Para garantir uma padronização nos commit foi utilizado está lib que garante que não possa ser feitos commit que fujam do padrão estabelicidos nas configurações prévias estabelecidas 
- **Swagger:** Utilizado para realizar a documentação de todos os endpoint da aplicação
- **Prettier e ESLint:** Manter a estilização do código para que siga um padrão pré-definido e também ajuda a manter um código mais limpo

## Installation

```bash
$ yarn install
```
### Obs: Caso esteja rodando a aplicação pela primeira vez e tenha intuito de realizar novos commits é necessário rodar o comando, a fim de garantir que os hooks sejam executados
```bash
$ yarn prepare
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
## Desenvolvimento e Experiência
Durante o desenvolvimento desse projeto houve muito comprometimento de minha parte, já estava bem familiarizado com a maioria das tecnologias principalmente Typescript e Postgres. A API está hospedada na Vercel, já o banco de dados está hospedado na aiven.io( que dos serviços gratuitos, são os mais estáveis). Infelizmente não houve tempo hábil para concluir os testes unitários e de integração, devido isso removi todos os arquivos para esse propósito. Entretanto todos os endpoints foram devidamente validados via Postman.
TypeScript, swagger, docker e Postgres são ferramentas que eu utilizava sempre na minha antiga experiência profissional. Já o NestJs, venho estudando ele há algum tempo (cerca de 4 meses) 

## Documentação no Swagger
```bash
{url}/api/swagger
```
### OBS:
  - Caso algum o projeto foi hospedado de Vercel e o Banco de dados na Aiven.io, caso perceba alguma indisponibilidade desses serviços durante o teste, não exite em me contatar
  - Caso queria testar localmente é necessário localmente é necessário definiar as variaveis de ambiente que podeser encontrada no arquivo .env.example.
## Meus contatos

- Author - Victor Oliveira
- Linkedin - [Victor Oliveira](https://www.linkedin.com/in/victor-oliveira-7a5a94103/)
- GitHub - [GitHub](https://github.com/ovitor38)
- Discord ID - victoroliveira7393
- WhatsApp - [Victor Oliveira](https://wa.me/qr/LPRKOV2PPKMDC1)

Quaisquer dúvidas estou a disposição 😃.
##  Tecnologias deste projeto

[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeORM](https://img.shields.io/badge/-TypeORM-F37626?style=flat-square&logo=typeorm&logoColor=white)](https://typeorm.io/)
[![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black)](https://swagger.io/)
[![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![git](https://img.shields.io/badge/-git-F05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/)