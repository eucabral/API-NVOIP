const express = require("express");
const app = express();

const routerAuth = require("./Routes/routerAuth");
const routerCall = require("./Routes/routerCall");

app.use("/auth", routerAuth);
app.use("/call", routerCall);

// quando nao encontra rota
app.use((req, res, next) => {
  const erro = new Error("Not found");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({ erro: { message: error.massage } });
});
app.listen(3010, function () {
  console.log(`O server esta rodando na porta 3010`);
});
module.exports = app;
