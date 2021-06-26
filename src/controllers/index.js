const { getAllTechnologies } = require("./getAllTechnologies");
const { getAllDevelopers } = require("./getAllDevelopers");
const { createDeveloper } = require("./createDeveloper");
const { updateDeveloper } = require("./updateDeveloper");
const { deleteDeveloper } = require("./deleteDeveloper");

module.exports = {
  getAllTechnologies,
  getAllDevelopers,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper
};
