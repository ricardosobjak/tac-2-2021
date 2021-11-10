const jwt = require('jsonwebtoken');

const isAuthorized = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(403).json({ message: 'Sem token de autenticação' });

  jwt.verify(authorization, process.env.JWT_SECRET_KEY, (err, payload) => {
    console.log(payload);

    if (err) return res.status(401).json({ message: 'Token inválido' });

    req.user = payload;

    return next();
  });
};

module.exports = isAuthorized;
