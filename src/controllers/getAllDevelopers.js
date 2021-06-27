const {
  Developers,
  Technologies,
} = require("../models");
const {} = require("../models");

const getAllDevelopers = async (_req, res) => {
  Developers.findAll({
    include: { model: Technologies, as: "especialidade", attributes: ["name"], raw : true},
  })
    .then((response) => {
      const result = JSON.parse(JSON.stringify(response));
      const newResult = result.map((actual) => actual.especialidade.map((acc) => acc.name))
      result.map((actual, index) => actual.especialidade = newResult[index]);
      return res.status(200).json(result)
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAllDevelopers,
};
