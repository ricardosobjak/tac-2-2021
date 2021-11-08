const log = (req, res, next) => {
  console.log("["+ new Date() + "] Nova requisição para a URL:" + req.url);
  return next();
};

module.exports = log;