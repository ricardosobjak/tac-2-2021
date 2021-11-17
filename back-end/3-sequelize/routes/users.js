var express = require('express');
var router = express.Router();

// Modelo: User
const { User } = require('../database/models');

// Obter todos os usuários
router.get('/', async (req, res) => {
  return res.json(await User.findAll());
});

// Obter um usuário pelo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await User.findByPk(id));
});

// Cadastrar um usuários
router.post('/', async (req, res) => {
  const userJson = req.body;

  try {
    let user = await User.create(userJson);
    res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});


// Atualizar o usuároio
router.put('/:id', async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;

  try {
    let user = await User.findByPk(id);
    if (!user) return res.status(400).json({ message: 'User not found!' });

    await user.update({ name, email, password });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

// Deletar o usuário
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    let user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found!' });

    await user.destroy();
    return res.send();
  } catch (e) {
    return res.status(400).json(e);
  }
});



module.exports = router;
