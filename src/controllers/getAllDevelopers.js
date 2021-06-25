const { Developers, sequelize} = require("../models");
const { Technologies } = require("../models");
const {DeveloperTechnologies} = require('../models');

const getAllDevelopers = async (_req, res) => {
  Developers.findAll({
    include: [
      { model: Technologies, as: "especialidade", attributes:['name'] },
    ],
  })
    .then((response) => res.status(200).json(response))
    .catch((err) => console.log(err));
};

module.exports = {
  getAllDevelopers,
};
