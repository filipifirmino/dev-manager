const { Developers, DeveloperTechnologies } = require("../models"); //Trigger

const updateDeveloper = (req, res) => {
  const { nome, fone, celular, endereco, tecnologias } = req.body;
  const { id } = req.params;

  Developers.update({ nome, fone, celular, endereco }, { where: { id: id } });
  tecnologias.forEach((actual) => {
    DeveloperTechnologies.update({ tecId: actual }, { where: { devId: id } });
  });
};

module.exports = {
  updateDeveloper,
};
