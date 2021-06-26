const { default: axios } = require("axios");
const { validationResult } = require("express-validator");
const { Developers, DeveloperTechnologies } = require("../models");

async function getAdress(cep) {
  cep = cep.replace("-", "");
  return axios
    .get(`http://viacep.com.br/ws/${cep}/json/`)
    .then(
      ({ data }) =>
        `${data.logradouro}-${data.bairro}/${data.localidade} - ${data.uf}`
    );
}

const createDeveloper = async (req, res) => {
  const { nome, fone, celular, cep, tecnologias } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const adress = await getAdress(cep);

    const newDeveloper = await Developers.create({
      nome,
      fone,
      celular,
      endereco: adress,
    });

    await tecnologias.forEach((actual) => {
      DeveloperTechnologies.create({ devId: newDeveloper.id, tecId: actual });
    });
    return res
      .status(201)
      .json({ message: "Successfully registered developer" });
  } catch (err) {
    return res.status(403).json({ message: "Failed to register" });
  }
};

module.exports = {
  createDeveloper,
};
