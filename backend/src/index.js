const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();

const server = http.Server(app);

setupWebsocket(server);

//Conexão com banco de dados
mongoose.connect('mongodb+srv://week10:15f1d4b8e288@week10.cbqo0.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Embutir o JSON no EXPRESS para aceitar requisições no formato JSON
app.use(express.json());

//Os principais métodos http -> GET, POST, PUT, DELETE
/*
    GET: para buscar/pegar informações
    POST: quando você quer criar alguma informação
    PUT: para editar alguma informação
    DELETE: para apagar alguma informação
*/

//Tipos de parâmetros dentro do Express:
/*
    Query params: request.query (Filtros, ordenação, paginação...)
    Route params: request.params (Identificar um recurso na alteração ou remoção)
    Body: request.body (Dados para criação ou alteração de um registro)
*/
app.use(cors());

app.use(routes);

server.listen(3333);

