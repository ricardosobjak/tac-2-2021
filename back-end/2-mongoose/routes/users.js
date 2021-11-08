var express = require('express');
var router = express.Router();

const User = require('../models/User');

/**
 * Criando um usuário
 */
router.post('/', async (req, res) => {
  const json = req.body;

  const user = new User(json);

  await user.save();

  res.json(user);
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
