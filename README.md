<h1 align="center">
    <br>
    <p align="center"> 🚀 Favotite Movies API <p>
</h1>


## 💻 Sobre o projeto 

<br>

<p align="justify">O Favorite Movies é um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar. 
Onde receberemos cadastros de títulos ( filmes e séries ) referenciando cada estúdio criador. 

```
"Relacionamento" no MongoDB
- ref no model
- populate no find (eager loading)
```

<br>

## ⚙️ Funcionalidades/Objetivos

- Cadastrar Títulos e Estudios;
- Listar Títulos e Estúdios;
- Atualizar Títulos e Estúdios;
- Delatar Títulos e Estúdios;
- Avaliação dos títulos através de like ou dislike ;
- Simplificar a vida dos usuários;

<br>

## 📚 Aprendizados

O projeto consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

<br>

## 📁 Arquitetura MVC 

```
 📁 Favorites-Movies-API
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 estudioController.js
   |         |- 📑 tituloController.js
   |
   |    |- 📁 data
   |         |- 📑 database.js
   |
   |    |- 📁 models
   |         |- 📑 estudio.js
   |         |- 📑 titulo.js
   |
   |    |- 📁 routes
   |         |- 📑 estudioRoutes.js
   |         |- 📑 index.js
   |         |- 📑 tituloRoutes.js 
   |
   |    |- 📑 app.js
   |    |- 📑 swagger.json
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js

```
<br>

Acesse o board para conferir as informações de forma visual: https://miro.com/app/board/o9J_lA7Nns8=/

<br>

## 🔃 Rotas

* local: http://localhost:7070
* Necessário a url do mongoDB que fica dentro do .env "MONGODB_URI"

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente
 

<br>

## 🔃 Retorna a documentação no swagger 

| Método HTTP  | Endpoint                            | Descrição                   |
| ------------ | ----------------------------------- | --------------------------- |
| GET          | `http://localhost:7070/api-docs`    |  documentação  swagger      |       

<br>

## 🔃 Retorna teste com apresentação (Index)

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:7070/`     |  Mensagem de apresentação (Index)    |             |

<br>

## 🔃 Retorna teste com apresentação (Index)

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:7070/`     |  Mensagem de apresentação (Index)    |             |

<br>

## 🔃 Manipulação das Rotas de Estúdios:

| Método HTTP  | Endpoint              | Descrição                               |
| ------------ | -------------------   | ------------------------------------    |
| GET          | `/studio/all`         | Retorna todos os estúdios cadastrados   |
| GET          | `/studio/:id`         | Retorna um estúdio específico por id    |
| POST         | `/studio/create`      | Cria/cadastra um novo estúdio           |
| PATCH        | `/studio/:id`         | Altera informações de um artista        |
| DELETE       | `/studio/:id`         | Remove um estúdio específico            |

<br>

## 🔃 Manipulação das Rotas de Títulos:

| Método HTTP  | Endpoint               | Descrição                                       |
| ------------ | ---------------------- | ----------------------------------------------- |
| GET          | `/title/all`           | Retorna todos os títulos cadastradas            |
| GET          | `/title/marvel`        | Retornar todos os títulos com o estudio Marvel  |
| GET          | `/title/ghibli`        | Retornar todos os títulos com o estudio Ghibli  |
| GET          | `/title/pixar`         | Retornar todos os títulos com o estudio pixar   |
| GET          | `/title/:id`           | Retorna um título específico por id             |
| POST         | `/title/create`        | Cria/cadastra um título                         |
| PUT          | `/title/:id`           | Altera informações de um título                 |
| PATCH        | `/title/:id`           | atualiza informações de um título por parte     |
| DELETE       | `/title/:id`           | Remove uma títluo específico                    |
| POST         | `/title/:id/like`      |  Dar um like em um título                       |
| POST         | `/title/:id/dislike`   |  Dar um dislike em um título                    |

<br>

## ✅ Dados para Collection Estúdios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


<br>

## ✅ API deve retornar seguinte JSON:

```jsx
[
    {
    "criadoEm": "2021-11-07T01:27:40.786Z",
    "_id": "60bec43c8c288c285d2685e7",
    "nome": "Marvel",
    "__v": 0
    },
    {
    "criadoEm": "2021-11-07T01:27:40.786Z",
    "_id": "60bec43d8c288c285d2685e5",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "2021-11-07T01:27:40.786Z",
    "_id": "60bec43d8c288c285d2685e2",
    "nome": "Pixar",
    "__v": 0
  }
]
```
 <br>

 ## ✅ Dados para Collection Titulos

- id: autogerado e obrigatório
- like: opcional
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referência do estúdio cadastrado previamente obrigatório
<br>

## ✅ API deve retornar seguinte JSON:

```jsx
[
  {
    "likes": 5,
    "criadoEm": "2021-11-07T01:27:40.892Z",
    "_id": "60bad4567c299c285d8756e6",
    "nome": "Luca",
    "genero": "Animação/Família",
    "descricao": "Em Luca, acompanhamos uma história de amadurecimento sobre um jovem que vive um verão inesquecível repleto de sorvetes, massas e passeios intermináveis de scooter. Luca compartilha essas aventuras com seu novo melhor amigo, mas toda a diversão é ameaçada por um segredo profundamente bem guardado: eles são monstros marinhos de outro mundo, logo abaixo da superfície da água.",
    "estudio": {
      "criadoEm": "2021-11-07T01:27:40.786Z",
      "_id": "60bec43d8c288c285d2685e2",
      "nome": "Pixar"
    }
  }
]
```

<br>

## 👨‍💻 Autora

## Elisabete Alves

- [LINKEDIN](https://www.linkedin.com/in/elisabete-a-santos/)
- [GITHUB](https://github.com/elisabetealves)
 
<br>