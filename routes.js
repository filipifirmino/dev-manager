const express = require("express");
const { body } = require("express-validator");

const routes = express();

const REGEX_CEP = /^[0-9]{2}[0-9]{3}-[0-9]{3}$/;

const {
  getAllTechnologies,
  getAllDevelopers,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper,
} = require("./src/controllers");


routes.get("/", getAllTechnologies);

routes.get("/developer/:id?/:nome?/:celular?/:endereco?/:especialidade?", getAllDevelopers);

// routes.get("/developers", getDeveloperByParam)

// app.get('/developer', function(req, res) {
// let id = req.query.year; //either a value or undefined
// let nome = req.query.month;
// let fone = req.query.day;
// let celular = req.query.celular;
// let endereco = req.query.celular;
// let especialidade = req.query.celular;
// }




routes.post(
  "/developer",
  body("nome").isString().isLength({ max: 120 }),
  body("tecnologias").isArray({ min: 2 }),
  body("cep").matches(REGEX_CEP).isLength({ min: 9, max: 9 }),
  createDeveloper
);

routes.put("/developer/:id", updateDeveloper);

routes.delete("/developer/:id", deleteDeveloper);

module.exports = routes;
