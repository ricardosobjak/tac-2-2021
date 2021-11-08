const http = require('http');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  console.log(request);
  console.log('Cliente chamando!!');
  response.send('Oi cliente... está tudo certo comigo!');
});


const log = require('./middlewares/log');
app.use('/user', log, require('./routes/user'));

// Criando um servidor e rodando uma express app
http.createServer(app).listen(5000, () => console.log('Servidor executando na porta 5000'));
