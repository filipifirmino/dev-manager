const { Technologies } = require("../models");

const getAllTechnologies = async (_req, res) => {
  Technologies.findAll()
    .then((response) => res.status(200).json(response))
    .catch((err) =>
      console.log(`Error in controller getAllTechnologies: ${err}`)
    );
};

module.exports = {
  getAllTechnologies,
};
