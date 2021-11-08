const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');

/**
 * Criando um usuário
 */
router.post('/', async (req, res) => {
  const json = req.body;

  // Somente salva o usuário, se não existir um e-mail igual armazenado no DB
  if ((await User.countDocuments({ email: json.email })) == 0) {
    // Instanciando um objeto da classe User (definida pelo Mongoose)
    const user = new User(json);

    // Faz a validação conforme as restrições definidas no Schema do usuário
    const hasErrors = user.validateSync();

    hasErrors // Verifica se o objeto de erro existe
      ? res.status(400).json(hasErrors) // Devolvemos os erros para o cliente
      : res.json(await user.save()); // Salvar o usuário e devolvê-lo ao cliente
  } else res.status(400).json({ message: 'Já existe um usuário cadastrado com este e-mail' });
});

/**
 * Obter todos os usuários
 */
router.get('/', async (req, res) => {
  res.json(await User.find());
});

/**
 * Obter um usuário pelo ID
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    new mongoose.Types.ObjectId(id);
  } catch (error) {
    return res.status(400).json({ message: 'Representação inválida do ID' });
  }

  const user = await User.findById(id);

  // Gerando a resposta para o client: Usuário ou uma msg 404 (not found)
  user ? res.json(user) : res.status(404).send();
});

/**
 * Atualizar um usuário
 */
router.put('/', async (req, res) => {
  const json = req.body;

  let user = await User.findById(json.id);

  // Buscar um usuário no DB que tenha o mesmo e-mail que será atualizado
  const userConfere = await User.findOne({ email: json.email });

  if (userConfere && userConfere.id != json.id) {
    return res.status(400).json({ message: 'O e-mail já é utilizad por outro usuário' });
  } else {
    json.updatedAt = new Date();
    json.createdAt = user.createdAt;

    const hasErros = new User(json).validateSync();
    if (hasErros) return res.status(400).json(hasErros);

    // Atualizar o usuário na coleção
    await User.updateOne({ _id: json.id }, json);
    res.json(json);
  }
});

/**
 * Deletar um usuário
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  //if (req.userId != id) return res.status(403).json({ message: 'Sem permissão para deletar o usuário.' });

  const result = await User.deleteOne({ _id: id });

  if (result.deletedCount > 0) res.send();
  else res.status(404).json({ category: 'id', message: 'Invalid user ID' });
});

module.exports = router;
