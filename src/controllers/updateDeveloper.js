const { Developers, DeveloperTechnologies } = require("../models"); //Trigger

const updateDeveloper = async (req, res) => {
  const { nome, fone, celular, endereco, tecnologias } = req.body;
  const { id } = req.params;

  try {
    Developers.update({ nome, fone, celular, endereco }, { where: { id: id } });
    tecnologias.forEach((actual) => {
      DeveloperTechnologies.update({ tecId: actual }, { where: { devId: id } });
    });
    return res.status(200).json({message: "successfully!"})
  } catch (error) { res.status(403).json({message: "Failure delete"})}
};

module.exports = {
  updateDeveloper,
};
