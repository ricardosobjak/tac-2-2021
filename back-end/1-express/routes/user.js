const log = require("../middlewares/log");
const express = require("express");
const router = express.Router();


const users = [
  { id: 1, name: 'A', mail: 'a@gmail.com', password: 'aaa' },
  { id: 2, name: 'B', mail: 'b@gmail.com', password: 'aaa' },
  { id: 3, name: 'C', mail: 'c@gmail.com', password: 'aaa' },
  { id: 4, name: 'D', mail: 'd@gmail.com', password: 'aaa' },
  { id: 5, name: 'E', mail: 'e@gmail.com', password: 'aaa' },
  { id: 6, name: 'F', mail: 'f@gmail.com', password: 'aaa' },
];

// Método para obter uma lista de usuários
router.get('/', log, (req, res) => {
  const { page = 1, size = 10 } = req.query;

  //res.send(`Obtendo ${size} usuários. Página = ${page}.`);
  res.json(users);
});

// Método para obter um usuário específico
router.get('/:id', (req, res) => {
  //res.send(`Usuário com ID ${req.params.id}`);
  const u = users.filter((e) => e.id == req.params.id);

  if (u.length == 0) 
    res.status(404).json({ message: 'Usuário não encontrado' });
  else 
    res.json(u[0]);
});

// Método para criar um usuário
router.post('/', (req, res) => {
  const { name, mail, password } = req.body; // Objeto desestruturado em constantes
  const usuario = req.body; // Objeto inteiro

  console.log(req.body);

  res.send('Novo usuário: ' + name);
});

// Método para atualizar um usuário
router.put('/', (req, res) => {
  res.send(`Atuaizando um usuário`);
});

// Método para remover um usuário
router.delete('/:id', (req, res) => {
  res.send(`Removendo o usuário ${req.params.id}`);
});


// Exportar o módulo router
module.exports = router;