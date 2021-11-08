const http = require('http');
const express = require('express');

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: 'A', mail: 'a@gmail.com', password: 'aaa' },
  { id: 2, name: 'B', mail: 'b@gmail.com', password: 'aaa' },
  { id: 3, name: 'C', mail: 'c@gmail.com', password: 'aaa' },
  { id: 4, name: 'D', mail: 'd@gmail.com', password: 'aaa' },
  { id: 5, name: 'E', mail: 'e@gmail.com', password: 'aaa' },
  { id: 6, name: 'F', mail: 'f@gmail.com', password: 'aaa' },
];

app.get('/', (request, response) => {
  console.log('Cliente chamando!!');

  response.send('Oi cliente... está tudo certo comigo!');
});

// Método para obter uma lista de usuários
app.get('/user', (req, res) => {
  const { page = 1, size = 10 } = req.query;

  //res.send(`Obtendo ${size} usuários. Página = ${page}.`);
  res.json(users);
});

// Método para obter um usuário específico
app.get('/user/:id', (req, res) => {
  //res.send(`Usuário com ID ${req.params.id}`);
  const u = users.filter((e) => e.id == req.params.id);

  if (u.length == 0) 
    res.status(404).json({ message: 'Usuário não encontrado' });
  else 
    res.json(u[0]);
});

// Método para criar um usuário
app.post('/user', (req, res) => {
  const { name, mail, password } = req.body; // Objeto desestruturado em constantes
  const usuario = req.body; // Objeto inteiro

  console.log(req.body);

  res.send('Novo usuário: ' + name);
});

// Método para atualizar um usuário
app.put('/user', (req, res) => {
  res.send(`Atuaizando um usuário`);
});

// Método para remover um usuário
app.delete('/user/:id', (req, res) => {
  res.send(`Removendo o usuário ${req.params.id}`);
});

// Criando um servidor e rodando uma express app
http.createServer(app).listen(5000, () => console.log('Servidor executando na porta 5000'));
